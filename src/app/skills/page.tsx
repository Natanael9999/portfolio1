import Link from "next/link"

export default function Skills(){
    return(
        <div className="bg-cl1 min-h-screen flex flex-col">

            <header className="flex p-2 justify-end bg-cl3">
               <ul className="flex flex-row justify-end">
                    <li className="mr-32"><Link className="text-white" href={"/"}>Home</Link></li>
                    <li className="mr-32"><Link className="text-white" href={"/about"}>About</Link></li>
                    <li className="mr-32"><Link className="text-white" href={"/skills"}>Skills</Link></li>
                    <li className="mr-32"><Link className="text-white" href={"/contact"}>Contact</Link></li>
                </ul>
            </header>

            <section>

            <div className="flex justify-center items-center flex-col">
                <div className="flex flex-row w-5/6 mt-14 justify-center items-center text-center">
                    <div className="w-60 h-60 mr-10 justify-center items-center text-center">
                        <p className="text-cl2 text-xl font-bold mb-4">My Hard Skills</p>
                        <p className="text-white text-sm mb-4">Java - Intermediate</p>
                        <p className="text-white text-sm mb-4">HTML - Beginner</p>
                        <p className="text-white text-sm mb-4">CSS - Beginner</p>
                        <p className="text-white text-sm mb-4">MySQL - Intermediate</p>
                    </div>
                    <div className="w-60 h-60 mr-10 justify-center items-center text-center">
                        <p className="text-cl2 text-xl font-bold mb-4">My Communication Skills</p>
                        <p className="text-white text-sm mb-4">Portuguese - Native</p>
                        <p className="text-white text-sm mb-4">English - B1</p>
                    </div>
                    <div className="w-60 h-60 justify-center items-center text-center">
                        <p className="text-cl2 text-xl font-bold mb-4">My Soft Skills</p>
                        <p className="text-white text-sm mb-4">Empathy</p>
                        <p className="text-white text-sm mb-4">Problem-solving</p>
                        <p className="text-white text-sm mb-4">Conflict Resolution</p>
                        <p className="text-white text-sm mb-4">Creativity</p>
                        <p className="text-white text-sm mb-4">Emotional Intelligence</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center mb-6">
                    <div className="w-48 h-60 bg-white rounded-md mr-16 overflow-hidden">
                        <div className="w-full h-3/4">
                            <img className="w-full h-full object-cover rounded-md" src={"https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                            alt="My Favorite Tv Series" />
                        </div>
                        <div className="text-center h-1/4 flex items-center justify-center">
                            <p className="text-cl1 text-sm">My Favorite Tv Series - Html, Css, JS</p>
                        </div>
                    </div>
                    <div className="w-48 h-60 bg-white rounded-md mr-16 overflow-hidden">
                        <div className="w-full h-3/4">
                            <img className="w-full h-full object-cover rounded-md" src={"https://images.pexels.com/photos/31157485/pexels-photo-31157485.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                            alt="My Favorite Tv Series" />
                        </div>
                        <div className="text-center h-1/4 flex items-center justify-center">
                            <p className="text-cl1 text-sm">Lolja - App de loja - TS, Next.js</p>
                        </div>
                    </div>
                    <div className="w-48 h-60 bg-white rounded-md mr-16 overflow-hidden">
                        <div className="w-full h-3/4">
                            <img className="w-full h-full object-cover rounded-md" src={"https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                            alt="My Favorite Tv Series" />
                        </div>
                        <div className="text-center h-1/4 flex items-center justify-center">
                            <p className="text-cl1 text-sm">Cesa - Controle de Fluxo de Automóveis - Java, JavaFX</p>
                        </div>
                    </div>
                </div>
                <h1 className="text-cl2 text-xl"><Link href={"https://github.com/Natanael9999"}>See more of my projects clicking here.</Link></h1>
            </div>

            </section>

        </div>
    )
}