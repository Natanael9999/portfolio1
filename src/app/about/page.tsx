import Link from "next/link"

export default function About(){
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

            <section>

            <div className="flex flex-col justify-center items-center text-center mt-20">
                <div className="flex flex-col text-center justify-center w-4/6">
                    <p className="text-white text-xl text-center mb-10">
                        I was born in Macarani, Bahia, but I currently live in Itapetinga. 
                        I completed my high school education at the Federal Institute of 
                        Education, Science, and Technology of Bahia, with a certification 
                        in Environmental Technician. 
                        I am currently studying Systems Information at the same institute.</p>
                </div>
                <div className="flex flex-row mt-20">
                    <div className="mr-10">
                        <img className="rounded-full" src={"https://media.licdn.com/dms/image/v2/D4D03AQEGCJ3Vt_nSVg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695775673972?e=1744848000&v=beta&t=tUHV0SklgAw3p3tVqTo1U4zuYYdEjkEz3VvqZXa2Lpo"} 
                        alt="" 
                        width={240} 
                        height={240}/>
                    </div>
                    <div className="w-60 h-60 mr-10 justify-center items-center">
                        <p className="text-cl2 text-xl font-bold mb-4 text-left">My Mission</p>
                        <p className="text-white text-sm text-left mb-10">is to help make the world a better place with my projects, 
                            having impacts that are not only economic, 
                            carrying with me my principles, respect, and love for others.</p>
                    </div>
                    <div className="w-60 h-60 justify-center items-center">
                        <p className="text-cl2 text-xl font-bold mb-4 text-left">My Hobbies and Interests</p>
                        <p className="text-white text-sm text-left mb-10">Besides programming, I really enjoy spend time with my family and friends, 
                            go to church and watch geography content. 
                        I also watch and talk a lot about geopolitics 
                        and astronomy and I appreciate to Watch TV Series, Movies and read Books too.</p>
                    </div>
                </div>
            </div>

            </section>
        </div>
    )
}