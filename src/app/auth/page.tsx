'use client'

import { useState } from 'react';
import './auth.css';
import { useRouter } from "next/navigation";
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Auth  = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [Name , setName] = useState<string>('');
  const [email , setemail] = useState<string>('');
  const [password , setPassword] = useState<string>('');
  const [image , setImage] = useState<string>('');
  const [loading , setLoading] = useState<boolean>(false);

  const router = useRouter();
  const notify = () =>  toast.error("Please Fill The Details 😒");
  const invalid = () => toast.error("Invalid Details ☠️ || Server Error ☠️");
  const lsucess = () => toast.success("Logged IN 😍");
  const ssucess = () => toast.success("You are now a family member 😘");


  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };
  const handleLogin = async () =>{
    setLoading(true);
    if(email.trim() == '' || password.trim() == ''){
      setLoading(false);
        notify();
        return;
    }
    try{

        const response = await axios.post('http://localhost:6969/auth/login'  , {
            email : email ,
            password : password
        });
        if(response){
         setTimeout(() =>{
          //console.log(response.data);
          const {email , token} = response.data;
          localStorage.setItem('authToken' , token);

          lsucess();
          setLoading(false);
         
           router.push('/core');
         }, 3000);
        }
        


    }
    catch(err){
      setLoading(false);
      invalid();
      return;
    }
  }

  const handleSignUp = async () =>{
    setLoading(true);
    if(Name.trim() == '' || email.trim() == '' || password.trim() == '' || image.trim() == ''){
      notify();
      setLoading(false);
      return;
    }
    try{
   const res = await axios.post('http://localhost:6969/auth/signup' , {
    username : Name ,
    email : email,
    password : password,
    image : image,

   })
   if(res.status == 200 || res.status == 201){
    
    setTimeout(() =>{
      setLoading(false);
      ssucess();
      
    } , 3000)
    
    return;
   }
   
    }
    catch(err){
      setTimeout(() =>{
      setLoading(false);
     invalid();
      }, 3000);

     return;
    }
  }
  
  return (
    <>
    <ToastContainer/>
    {loading ? (
      <div style={{display :'flex' , justifyContent : 'center' , alignItems:'center' , height:'100vh'}}>
      <div className="lds-ripple"><div></div><div></div></div>
      </div>
     
    ) : (<>
 
           <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'  , height:'100vh' , 
        

        }}>
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input className="toggle" type="checkbox" onChange={handleToggle} checked={isSignUp} />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className={`flip-card__inner ${isSignUp ? 'is-signup' : ''}`}>
            <div className="flip-card__front">
              <div className="title">LOG IN</div>
              <div className="flip-card__form">
                <input type="email" placeholder="Email" name="email" className="flip-card__input" value={email} onChange={(e) => setemail(e.target.value)} />
                <input type="password" placeholder="Password" name="password" className="flip-card__input" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button className="flip-card__btn" onClick={handleLogin}>Let's go!</button>
              </div>
            </div>
            <div className="flip-card__back">
              <div className="title">SIGN UP</div>
              <div className="flip-card__form">
                <input type="name" placeholder="Name" className="flip-card__input" value={Name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder="Email" name="email" className="flip-card__input" value ={email} onChange={(e) => setemail(e.target.value)} />
                <input type="password" placeholder="Password" name="password" className="flip-card__input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                 <input type="name" placeholder="Image_url" name="image_url" className="flip-card__input" value={image} onChange={(e) => setImage(e.target.value)}/>

                <button className="flip-card__btn" onClick={handleSignUp}>CONFIRM!</button>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
    </div>
    
    </>)}
    
    </>
  );
};

export default Auth; 