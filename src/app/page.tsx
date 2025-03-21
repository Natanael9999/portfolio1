import Link from "next/link"

export default function Home(){

  return(
    <div className="bg-cl1 min-h-screen flex flex-col">
            <header className="flex p-2 justify-end">
               <ul className="flex flex-row justify-end">
                    <li className="mr-32"><Link className="text-white" href={"/"}>Home</Link></li>
                    <li className="mr-32"><Link className="text-white" href={"/about"}>About</Link></li>
                    <li className="mr-32"><Link className="text-white" href={"/skills"}>Skills</Link></li>
                    <li className="mr-32"><Link className="text-white" href={"/contact"}>Contact</Link></li>
                </ul>
            </header>
            <main className="flex flex-grow justify-center items-center text-center">
                <div className="flex flex-col w-96 justify-center mr-32">
                    <p className="text-cl2 text-xl font-bold mb-4 text-left">Backend Developer</p>
                    <p className="text-white text-3xl text-left mb-10">
                        I am a Systems Information student, developing my skills, especially in backend
                        development with Java."
                    </p>
                    <Link className="bg-cl2 rounded-lg w-32" href={"/about"}>Go Ahead</Link>
                </div>
                <div className="w-96 justify-center">
                    <img src={"https://i.postimg.cc/MHCXmLmy/1538444014174.jpg"}
                    alt="" 
                    width={400} 
                    height={400}/>
                </div>
            </main>
            <footer className="bg-cl3 p-2">
            </footer>
        </div>
  )
}