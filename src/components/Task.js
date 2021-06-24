import './Task.css';
import { connect } from 'react-redux';
import { deleteTask,upadateDone} from '../store/actions'

const Task = (props) => {
    return (<div className="container-fluid">
    <div className="row banner font-title">
      <div className="col-12 col-md-12 col-lg-9 col-xl-8">
        <br />
      
        <br />
        <div className="row font-normal">
          <div className="col">
            <div className="todo-card todo-progress todo-highlight">
            
              <span className="todo-title">{props.task.title}</span>
             
              <br />
              { props.showIcons &&
                <span className="todo-icon ">
            
              <i class="fas fa-eraser" onClick={()=>props.deleteTask(props.task.id)}></i>
              <i class="fab fa-angellist"  onClick={()=>props.upadateDone(props.task)}></i>
              </span>}
              
            </div>
            
          </div>
        </div>
        
      </div>
     
    </div>
  </div> );
}
const mapStateToProps=state=>{
  return {

  }
}
 
export default connect(mapStateToProps,{deleteTask,upadateDone}) (Task);