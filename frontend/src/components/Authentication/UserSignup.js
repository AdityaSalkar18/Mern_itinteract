import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import networkLogo from './network.png';

export default function Signup() {
  const [data, setData] = useState({
    userName: "",
    email: "",
    userAct: "User",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  }

   const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const url = "http://localhost:8080/api/api/users/";
      const {data: res} = await axios.post(url, data);
      navigate("/");
      console.log(res.message);
    }catch(error){
      if(
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ){
        setError(error.response.data.message);
      }

    }

   };



  

  return (
    <div className="container mt-5">
      <div className="container py-2">

        <h1 className='mt-3'> <img src={networkLogo} alt="" width="55" height="55"></img>ITInteract</h1>
        <div class="col-md-8 mx-auto col-lg-4">
          <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
            <h3 className='mb-3'>Signup With User Account</h3>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" placeholder="User Name" name="userName" onChange={handleChange} value={data.userName} required />
              <label for="floatingInput">User name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" placeholder="Email" name="email" onChange={handleChange} value={data.email} required />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" placeholder="Password" name="password" onChange={handleChange} value={data.password} required />
              <label for="floatingPassword">Password</label>
            </div>

            {error && <div class="alert alert-danger" role="alert">
              {error}
            </div>}

            <button class="w-100 btn btn-lg btn-secondary" type="submit">Sign up</button>

            <hr class="my-4" />

             <Link to="/signup" className='mb-2'>
            <button
              className="w-80 mb-2 btn btn-outline-secondary"
            >
              Signup With Student Account
            </button>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}><h6 class="text-body-secondary">Already have an account?  Log in here.</h6></Link>

          </form>
        </div>

      </div>

    </div>
  )
}
