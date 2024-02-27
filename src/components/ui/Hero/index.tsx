'use client'
import { useRouter } from "next/navigation";

const Hero = () =>{
  const router = useRouter();
  const handleClick = () =>{
    router.push('/core');
  }
    return(
          <main className="flex flex-col text-white justify-center items-center h-screen">
       <div className="max-w-2xl mx-auto text-center">
    <h1 className="text-6xl mb-4">ENCRYPTOPIA</h1>
    <p className="text-lg">Unlock the secrets of encryption with our comprehensive educational platform. Learn about various encryption algorithms such as MD5, Caesar Cipher, ROT-13, and Base64 while mastering the art of data security. Encrypt and decrypt data with ease while expanding your knowledge in cryptography</p>
  </div>
           <div className="m-4 flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3  rounded cursor-pointer"
           onClick={handleClick}>
                  <button>
                    DEMO

                  </button>
                  <img src="arraow.svg" className="m-2" />
         </div>
  </main>  
    
    )
}
export default Hero;
