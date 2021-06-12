
import React from 'react'
import { useForm } from "react-hook-form";
import {Redirect} from 'react-router-dom'
function Login(props) {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.txtUsername === 'admin' && data.txtPassword === 'admin') {
      localStorage.setItem('user', JSON.stringify({
        username: data.txtUsername, password: data.txtPassword
      }))
    }
  }
  const checkExistedUser = localStorage.getItem('user');
  if(checkExistedUser!== null){
    let{location} = props
    console.log(location)
    return <Redirect to={
        {
          pathname: '/products',
          state: {
            from: location
          }
        }
    } />
  }
  
  return (
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={handleSubmit(onSubmit)}>
          <legend>Login</legend>

          <div className="form-group">
            <label >Username</label>
            <input type="text" className="form-control" id="" placeholder="Input field"
              name="txtUsername" {...register("txtUsername", { required: true })} />
            {errors.txtUsername && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" id="" placeholder="Input field"
              name="txtPassword" {...register("txtPassword", { required: true })} />
            {errors.txtPassword && <span>This field is required</span>}
          </div>
          <button type="submit" className="btn btn-primary">Đăng nhập</button>
        </form>
      </div>
    </div>


  );
}

export default Login;
