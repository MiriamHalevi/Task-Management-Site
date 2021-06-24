import { useState } from "react";
import './Enter.css';
import {login} from "../store/actions";
import { connect } from 'react-redux';

const Register = (props) => {
    const [userName, setuserName] = useState();
    const [city, setcity] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const changeUser = (e) => {
        if(e.target.value.match("^[a-zA-Z]+$") !== null)
        setuserName(e.target.value);
        else alert("שם לא תקין");

    }
    const changeMail = (e) => {
        setEmail(e.target.value);
   
    } 
     const changeCity = (e) => {
     
        setcity(e.target.value);
   
    }  
    const changePhone = (e) => {
         setPhone(e.target.value);
    } 
    const changeAddress = (e) => {
        
        setAddress(e.target.value);
    } 
    const singIn = () => {
        let newUser={
            "id": 2,
            "name": "Leanne Graham",
            "username": userName,
            "email": email,
            "address": {
              "street": address,
              "suite": "Apt. 556",
              "city": city,
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": phone,
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          }
      props.login(newUser);
      props.callFunc();
    }
    return (<>
        <div className="group">
            <label for="user" className="label">Username</label>
            <input id="user" type="text" className="input" onKeyUp={changeUser}/>
        </div>
        <div className="group">
            <label for="pass" className="label">City</label>
            <input id="user" type="text" className="input"  onKeyUp={changeCity}/>
        </div>
        <div className="group">
            <label for="pass" className="label">Address</label>
            <input id="pass" type="text" className="input" onKeyUp={changeAddress} />
        </div>
        <div className="group">
            <label for="pass" className="label">Email Address</label>
            <input id="pass" type="mail" className="input" onKeyUp={changeMail}/>
        </div>
        <div className="group">
            <label for="pass" className="label">Phone</label>
            <input id="pass" type="text" className="input" maxLength="10" minLength="9" onKeyUp={changePhone} />
        </div>
        <div className="group">
            <input type="submit" className="button" value="Sign Up" onClick={singIn} />
        </div>
        <div className="hr"></div>
        <div className="foot-lnk">
            <label for="tab-1">Already Member?</label>
        </div>
    </>);
}
const mapStateToProps=state=>{
    return {
    }
  }

export default connect(mapStateToProps,{login}) (Register);