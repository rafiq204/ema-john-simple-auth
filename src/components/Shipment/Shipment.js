import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import img from "../../image/google2.png";

const Shipment = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
  };
  

  return (
    <div className="form-container">
      <div>
        <form onSubmit={handleCreateUser}>
          <h2 className="form-title">Shipping information </h2>
          <div className="input-group">
            <label htmlFor="name">Your name</label>
            <input onBlur={handleName} type="text" name="name" id="" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="address">Your Address</label>
            <input
              onBlur={handleAddress}
              type="text"
              name="address"
              id=""
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Your Phone</label>
            <input
              onBlur={handlePhone}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <div className="form-login">
            <input onClick={()=>navigate('/congratulation')} type="submit" value="Add Shipping" />
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default Shipment;
