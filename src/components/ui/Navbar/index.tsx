import Image from "next/image";
import Link from "next/link";


const NavBar = () =>{
  const isLoggedIn = true;
  return(
    <>
    <nav className="bg-gray-800 text-white flex justify-evenly items-center h-16 px-4 sticky top-0 z-50">
  <div>
    <img src="logo.svg" className="cursor-pointer"/>
    </div>
  <ul className="flex">
  <li className="m-4 cursor-pointer">HOME</li>
    
  <li className="m-4 cursor-pointer">ABOUTUS</li>
  <li className="m-4 cursor-pointer">
    <Link href="https://github.com/MohammedNayeemE">
      <img src='github.svg' alt="contribute"/>
    </Link>
    
  </li>
  </ul>
  <button className="bg-blue-500 hover:bg-blue-700 text-gold font-bold py-2 px-4 rounded">
    + GET PREMIUM
  </button>
  {/* <img src="user.svg" className="cursor-pointer"/> */}
  {
    isLoggedIn ? (
      <Link href={'/profile'}>
           <Image src= {'/chefewa.jpg'} alt="profile" height = {50} width = {50} className="rounded"/> 

      </Link>
    ) : (
   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    <Link href={'/auth'}>LOGIN</Link>
    
      </button> 
    )
  }


</nav>
    </>
  )
}
export default NavBar;