import React from 'react';
import img from "../../image/google2.png";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const SignUp = () => {

    const [email ,setEmail]=useState('');
    const [password , setPassword]=useState('');
    const [confirmPassword , setConfirmPassword]=useState('');
    const [error , setError]=useState('');
    const [createUserWithEmailAndPassword ,user]=useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()

    const handleEmail = event =>{
        setEmail(event.target.value)
    }
   
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPassword =event=>{
        setConfirmPassword(event.target.value)
    }

    if(user){
      navigate('/shop')
    }

    const handleCreateUser =event=>{
        event.preventDefault();
        if(password !==confirmPassword){
            setError("Your Password Didn't Match !");
            return;
        }
        if(password.length<6){
          setError('Password must be 6 characters or Longer !')
        }
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div className="form-container">
      <div>
        <form onSubmit={handleCreateUser}>
          <h2 className="form-title">SignUp</h2>
          <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input onBlur={handleEmail} type="email" name="Email" id="" required/>
          </div>

          <div className="input-group">
            <label htmlFor="password">password</label>
            <input onBlur={handlePassword} type="password" name="password" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm password</label>
            <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required/>
          </div>
            <p style={{color:'red'}}>
                {
                    error
                }
            </p>
          <div className="form-login">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
        <div>
          <p className="new-to-ema-john">
           Already have an account?{" "}
            <Link className="create-new-pass" to="/login">
              Login
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

export default SignUp;