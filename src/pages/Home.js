import React, {useState , useEffect} from "react";
import axios  from 'axios';
import { useNavigate } from "react-router-dom";
import {createBrowserHistory } from "history";
import {useCookies} from "react-cookie";
// import React, {useState,useEffect} from "react";
// import ReactFormInputValidation from "react-form-input-validation";

let isLogin = false;

export const history = createBrowserHistory();

const Home = ()=>{
    
    const navigate = useNavigate();
    const [Cookies,setCookie,removeCookie] = useCookies();
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    
    useEffect(() => {
        if(Cookies['jwt_token']){
            isLogin = true;
            navigate('/viewList',{replace:true})
            // history.replace('/viewList')
        }else{
            // navigate('/login')
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
        
        if(name !== undefined && email !== undefined && phone !== undefined && address !== undefined && role !== undefined && password != undefined){
            var user_data = {
                "name":name,
                "email":email,
                "password":password,
                "phone":phone,
                "address":address,
                "role":role
            
            }
            axios.post('http://localhost:8080/api/v1/auth/register',user_data).then((res)=>{
                if(res.data.success === true){
                    // history.replace('/login');
                    navigate('/login')
                }
            }).catch((error)=>{
                console.log(error);
                
            })

        }
    }


    const signupcompo = ()=>{
        return (
            <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                    <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                        <form id='form1' onSubmit={submitform}>

                            <div className="row">
                                <div className="col-md-6 mb-4">

                                <div className="form-outline">
                                    <input name="name" onChange={(e) => {setName(e.target.value)}} value={name} type="text" placeholder="Name" className="form-control form-control-lg" />
                                </div>

                                </div>
                                <div className="col-md-6 mb-4">

                                <div className="form-outline">
                                    <input name="email" onChange={(e) => {setEmail(e.target.value)}} value={email} type="email" placeholder="Email" className="form-control form-control-lg" />
                                </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4 d-flex align-items-center">

                                <div className="form-outline datepicker w-100">
                                    <input name="phone" onChange={(e) => {setPhone(e.target.value)}} value={phone} type="text" className="form-control form-control-lg" placeholder="phone" />
                                </div>

                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline datepicker w-100">
                                        <input name="password" onChange={(e) => {setAddress(e.target.value)}} value={address} type="text" className="form-control form-control-lg" placeholder="Password" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4 pb-2">

                                <div className="form-outline">
                                    <input name="address" onChange={(e) => {setPassword(e.target.value)}} value={password} type="text" placeholder="Address" className="form-control form-control-lg" />
                                </div>

                                </div>
                                <div className="col-md-6 mb-4 pb-2">
                                <div className="col-12">
                                    <select name="role" onChange={(e) => {setRole(e.target.value)}} value={role} className="select form-control-lg" id='roleselect'>
                                        <option value="0">Choose</option>
                                        <option value="1"  >Admin</option>
                                        <option value="2">User </option>
                                    </select>
                                    <label className="form-label select-label" htmlFor="roleselect">select role</label>
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
        )
    }

    return (
        <>
        {(isLogin === false)? signupcompo() : ''}

        </>
    )
}

export default Home