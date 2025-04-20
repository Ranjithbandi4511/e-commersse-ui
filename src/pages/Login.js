import React, {useState , useEffect} from "react";
import axios  from 'axios';
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
// import React, {useState,useEffect} from "react";
// import ReactFormInputValidation from "react-form-input-validation";

// let formObject;

const Login = ()=>{
    
    const [Cookies,setCookie,removeCookie] = useCookies();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    useEffect(() => {

        if(Cookies['jwt_token']){
            navigate('/viewList')
        }
        // const options = {
        //     // validation rules
        //     rules: {
        //         name: {
        //             required: [true, '* Please enter your name'],
        //         },
        //         email: {
        //             required: [true, '* Please enter your email'],
        //         },
        //         password: {
        //             required: [true, '* Please enter your password'],
        //         },
        //         phone: {
        //             required: [true, '* Please enter your phone'],
        //         },
        //         role: {
        //             required: [true, '* Please enter your password'],
        //         }
        //     },
        // };
        // // Initialize the form validator
        // formObject = new ReactFormInputValidation('#form1', options);
      
    })
        
    const submitform = (e)=>{
        e.preventDefault();
        // formObject.validate();
        
        if(email !== undefined &&  password !== undefined){
            var user_data = {
                "email":email,
                "password":password
            
            }
            axios.post('http://localhost:8080/api/v1/auth/login',user_data).then((res)=>{
                // if(res.data.is_user){
                    console.log(res.data.success);
                    if(res.data.success){
                        setCookie('jwt_token',res.data.token,{path:'/'});
                    }
                    if(Cookies['jwt_token']){
                        navigate('/viewList')
                    }
                // }
            }).catch((error)=>{
                console.log(error);
                
            })

        }
    }


    return (
        <>
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                    <form id='form1' onSubmit={submitform}>

                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="form-outline">
                                <input name="email" onChange={(e) => {setEmail(e.target.value)}} value={email} type="email" placeholder="Email" className="form-control form-control-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-4 pb-2">

                        <div className="form-outline">
                            <input name="password" onChange={(e) => {setPassword(e.target.value)}} value={password} type="text" placeholder="password" className="form-control form-control-lg" />
                        </div>

                        </div>
                        
                    </div>

                    <div className="mt-4 pt-2">
                        <input className="btn btn-primary btn-lg"  type="submit" value="Submit" />
                    </div>

                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Login