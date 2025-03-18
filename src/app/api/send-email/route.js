import { NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(req) {
    try {
        const { nome, email, titulo, mensagem } = await req.json();

        if (!nome || !email || !titulo || !mensagem) {
            return NextResponse.json({ error: "Todos os campos são obrigatórios!" }, { status: 400 });
        }

        const mailgun = new Mailgun(FormData);
        const mg = mailgun.client({
            username: "api",
            key: process.env.MAILGUN_API_KEY,
        });

        const data = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
            from: `No-Reply <no-reply@${process.env.MAILGUN_DOMAIN}>`,
            to: [process.env.DESTINATARIO],
            subject: titulo,
            text: `Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`,
        });

        return NextResponse.json({ message: "E-mail enviado com sucesso!", response: data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao enviar o e-mail.", details: error.message }, { status: 500 });
    }
}