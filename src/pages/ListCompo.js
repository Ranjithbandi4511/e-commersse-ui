import React, {useState , useEffect} from "react";
import axios  from 'axios';
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
// import React, {useState,useEffect} from "react";
// import ReactFormInputValidation from "react-form-input-validation";

// let formObject;

const ListCompo = (props)=>{

    const edit = async (e) =>{
        e.preventDefault();
        let uId = e.target.getAttribute('data-uId');
        var fetchcall = await  axios.post('http://localhost:8080/api/v1/auth/edituser',{uId:uId}).then((res)=>{
            if(res.data.length>0){
                // Setusers(res.data);
                console.log(res.data);
            }
        }).catch((error)=>{
            console.log(error);
        })

    }
    return (
        <>
          
            <tbody>
                <tr>
                    <td >{props.user.name}</td>
                    <td >{props.user.email}</td>
                    <td >{props.user.address}</td>
                    <td><a onClick={edit} className="btn btn-success" data-uid={props.user._id} href={`edit?id=`+props.user._id}>Edit</a></td>
                    <td><a className="btn btn-danger" href={`delete?id=`+props.user._id}>Delete</a></td>
                </tr>
            </tbody>


          <div>
                  
                </div>
                   
        </>
    )
}

export default ListCompo