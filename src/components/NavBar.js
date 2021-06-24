
import { Link, Route, Switch,useHistory } from 'react-router-dom';
import Enter from './Enter';
import TaskHistory from './TaskHistory';
import TaskList from './TaskList';

import './NavBar.css';
import { connect } from 'react-redux';
import { logOut} from '../store/actions'
const NavBar = (props) => {
   let History=useHistory();
  
const logOutUse=()=>{
  History.push("/")
  props.logOut()
}
  return (<>
 
    <header className="header">
      <h1 className="logo"><a href="./home.html" >tik task</a></h1>
      <ul className="main-nav">
        <li><Link to="/enter"><strong><em>התחברות</em></strong></Link></li>
       {props.user && <li><Link to="/taskList"><strong><em>רשימת משימות</em></strong></Link></li>}
      { props.user && <li><Link to="/history"><strong><em>היסטורית משימות</em></strong></Link></li>}
      { props.user &&<li><Link  onClick={()=>logOutUse()}><strong><em>יציאה</em></strong></Link></li>}

      </ul>
    </header>
    
    <Switch>
      <Route path="/enter">
        <Enter />
      </Route>
      <Route path="/taskList">
        <TaskList />
      </Route>
      <Route path="/history">
        <TaskHistory />
      </Route>
      <Route exact path="/">
        <Enter />
      </Route>
      <Route path="/">
        <Enter />
      </Route>
    </Switch>
   
  </>
  );
}
const mapStateToProps=state=>{
  return {
       user:state.user.currentUser
  }
}
export default connect(mapStateToProps,{logOut})(NavBar) ;