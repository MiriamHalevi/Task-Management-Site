import { connect } from "react-redux";
import Task from "./Task";

const TaskHistory = props => {
    return ( <div>
        <h1>history of tasks :</h1>
       {props.historyList.map(item=>
      <Task task={item} key={item.id} showIcons={false} />
      )} 
    </div> );
}
const mapStateToProps=state=>{
    return {
      historyList:state.task.historyList
    }
  }
export default connect(mapStateToProps,{}) (TaskHistory);