import React ,{ useState }  from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import networkLogo from './network.png';

export default function Login() {
  const [data, setData] = useState({
    email:"", 
    password:""
  });
  const [error, setError] = useState("");

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const {data: res} = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location.href = "/home"
      
    } catch (error) {
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
        <h3 className='mb-3'>Login </h3>
          <div class="form-floating mb-3">
            <input type="email" class="form-control"  placeholder="Email" name="email" onChange={handleChange} value={data.email} required/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control"  placeholder="Password" name="password" onChange={handleChange} vlue={data.password} required/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="m-2">
          <Link to="/signup" className="text-decoration-none ">
          <small class="text-body-secondary ">Forget Password</small>

		  </Link>
		  </div>
		   {error && <div class="alert alert-danger" role="alert">
		   {error}
           </div>}
          
           <button class="w-100 btn btn-lg btn-secondary"  type="submit">Log in</button>

          <hr class="my-4"/>
          <Link to="/signup" style={{textDecoration:"none"}}><h6 class="text-body-secondary">New here? Create an account.</h6></Link>
          
        </form>
      </div>

    </div>
      
    </div>
  )
}
