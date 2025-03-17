"use client"

import { useState } from "react";
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function Contact(){

    const [formData, setFormData] = useState({ nome: "", titulo: "", mensagem: "" });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("E-mail enviado com sucesso!");
            setFormData({ nome: "", titulo: "", mensagem: "" });
        } else {
            alert("Erro ao enviar o e-mail.");
        }
    };

    return(
        <div className="bg-cl3 min-h-screen flex flex-col">

            <header className="flex p-2 justify-end">
                <ul className="flex flex-row justify-end">
                    <li className="mr-32"><Link className="text-white" href={"/"}>Home</Link></li>
                    <li className="mr-32"><Link className="text-white" href={"/about"}>About</Link></li>
                    <li className="mr-32"><Link className="text-white" href={"/skills"}>Skills</Link></li>
                    <li className="mr-32"><Link className="text-white" href={"/contact"}>Contact</Link></li>
                </ul>
            </header>

            <div className="flex flex-row justify-center items-center mt-40">
                <div className="flex flex-col mr-40">
                    <div className="mb-10">
                        <p className="text-white text-3xl">Contact Information.</p>
                    </div>
                    <div>
                        <Link href="https://wa.me/77992065266">
                        <FaWhatsapp size={50} color="#25D366" />
                        </Link>
                    </div>
                    <div>
                        <p className="text-cl2 text-xl">samn995678@gmail.com</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                    <input
                        type="text"
                        name="nome"
                        className="bg-cl3 mb-6 border-b-2 border-gray-500 text-white outline-none"
                        placeholder="Your name"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="titulo"
                        className="bg-cl3 mb-6 border-b-2 border-gray-500 text-white outline-none"
                        placeholder="Title"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="mensagem"
                        placeholder="Digite sua mensagem..."
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="bg-cl3 mb-6 border-b-2 border-gray-500 text-white outline-none"
                        required
                    />

                    <button type="submit" className="bg-cl2 text-white p-2 rounded">
                        Enviar
                    </button>
                </form>

            </div>
        </div>
    )
}