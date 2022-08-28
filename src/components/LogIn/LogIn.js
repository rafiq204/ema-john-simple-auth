import React from "react";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import img from "../../image/google2.png";
import "./LogIn.css";

const LogIn = () => {

  const [email , setEmail]=useState('')
  const [password , setPassword]=useState('')
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);



 const handleEmailBlur = event =>{
    setEmail(event.target.value)
 }

const handlePasswordBlur = event =>{
  setPassword(event.target.value)
}
const handleSignIn =(event)=>{
   event.preventDefault();
   signInWithEmailAndPassword(email , password)
}
if(user){
  navigate('/shop')
}


  return (
    <div className="form-container">
      <div>
        <form onSubmit={handleSignIn}>
          <h2 className="form-title">Login</h2>
          <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="Email" id="" required/>
          </div>

          <div className="input-group">
            <label htmlFor="password">password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
          </div>
          <p style={{color:'red'}}>{error?.message}</p>
          {
             loading &&  <p>Loading....</p>

          }
          <div className="form-login">
            <input type="submit" value="Login" />
          </div>
        </form>
        <div>
          <p className="new-to-ema-john">
            New to Ema-John?{" "}
            <Link className="create-new-pass" to="/signup">
              Create new Account
            </Link>
          </p>
        </div>

        <div className="divider-container">
          <div className="divider"></div>
          <div>
            <span className="or">or</span>
          </div>

          <div className="divider"></div>
        </div>

        <div className="google-btn">
          <button>
            <img src={img} alt="" />
            <span className="continue-with-google"> Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
