import Login from "./Login";
import Register from "./Register";
import './Enter.css';
import { Redirect, useHistory } from "react-router";

import React, { useState } from 'react';
const Enter = () => {
    
    const history=useHistory();
    const callFromChildren=()=>{
  
      history.push("/taskList");
    }
  
    return ( <div className="login-wrap">
    <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
        <div className="login-form" >
        <div className="sign-in-htm">
            <Login callFunc={callFromChildren}/>
         </div>
            <div className="sign-up-htm">
               <Register callFunc={callFromChildren}/>
          </div>
        </div>
    </div>
    </div>
 );}

 
export default Enter;