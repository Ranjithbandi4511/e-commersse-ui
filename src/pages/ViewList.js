import React, {useState , useEffect} from "react";
import axios  from 'axios';
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
import ListCompo from "../pages/ListCompo";
// import React, {useState,useEffect} from "react";
// import ReactFormInputValidation from "react-form-input-validation";

// let formObject;

const ViewList = ()=>{
    
    const [users, Setusers] = useState([]);
    // const [Cookies,setCookie,removeCookie] = useCookies();
    // const navigate = useNavigate();
    
    // const [email, setEmail] = useState();
    useEffect((e) => {
        getUsers();
    },[])

    const getUsers = async ()=>{
        // Setusers(data);
        var fetchcall = await  axios.get('http://localhost:8080/api/v1/auth/getUsers').then((res)=>{
            if(res.data.length>0){
                // console.log(res.data);
                Setusers(res.data);
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    // if (devtools.isOpen) {
    //     while (true) {
            // console.log("access denied")
    //     }
    //     }


    return (
        <>
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">View List</h3>
                    <table className="table">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>action</th>
                        </tr>
                    </thead>
                    {users.map((arr)=>{
                         return <ListCompo user={arr} />
                        // console.log(arr.name);
                    })}
                    </table>
                    {/* <form id='form1'>
                    

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
                    </div> */}

                    {/* </form> */}
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default ViewList