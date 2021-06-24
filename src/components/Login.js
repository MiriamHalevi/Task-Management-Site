import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import {login} from "../store/actions";
const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [mail, setMail] = useState("");
    const [isRegistered, setisRegistered] = useState(false);
   const changeUser = (e) => {
       
            setUserName(e.target.value);
       
    }
    const changeMail = (e) => {
            setMail(e.target.value);
    }
    const check = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users?username=${userName}&email=${mail}`).then(
            resp => {
                console.log("resp")

                console.log(resp)
                if (resp.data.length !== 0) {
                    var usersArray = resp.data;
                     props.login(usersArray[0]);
                     props.callFunc(true);
                }

                else {
                    setisRegistered(true);
                }

            }
        ).catch(
            error => {
                console.log(error);
                setisRegistered(true)
            }
        )
       
    }
    return (<>
        <div className="group">
            <label for="user" className="label">Username</label>
            <input id="user" type="text" className="input" onKeyUp={changeUser} />
        </div>
        <div className="group">
            <label for="pass" className="label">Email Address</label>
            <input id="pass" type="text" className="input" onKeyUp={changeMail} />
        </div>

        <div className="group">
            <input type="submit" className="button" value="Sign In" onClick={check} />
        </div>
        <div className="hr">

        </div>
        
        { isRegistered && <div className="foot-lnk">
            <label for="tab-2">אחד מהנתונים שגוי , או שאינך רשום להרשמה לחץ כאן </label>
        </div>
        }

    </>)
}
const mapStateToProps=state=>{
    return {

    }
  }
export default connect(mapStateToProps,{login}) (Login);
