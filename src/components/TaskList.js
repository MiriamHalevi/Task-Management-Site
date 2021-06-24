import Task from "./Task";
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getAllTasks,addTask} from '../store/actions'
import { connect } from "react-redux";

const TaslList = (props) => {
  ///add a task
    const addTask=(dispach)=>{
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2']
          }).queue([
            {
              title: 'task title',
              text: 'write your task title'
            },
            {
                title: 'completed ?',
                input: 'radio',
                inputOptions: {
                  'true': 'true',
                  'false': 'false'
                }
            }
          ]).then((result) => {
            if (result.value) {
              const answers = result.value
              
              Swal.fire({
                title: 'All done!',
                html: `
                  Your task:
                  <pre><code>title :${result.value[0]} , complited :${result.value[1]}</code></pre>
                `,
                showCancelButton: true,
                confirmButtonText: 'save!'
               
              }).then( (result) => {
                    if (result.isConfirmed) {
                      console.log(props.taskList)
                    const newTask={
                      "userId": props.userId,
                      "id": props.taskList[props.taskList.length-1].id++,
                      "title": answers[0],
                      "completed": answers[1]
                    }
                    console.log(newTask)

                    props.addTask(newTask)
                    }
                }
              )
            }
          })
    }
    
    useEffect(() => {
props.getAllTasks(props.userId);
    }, []);
    return ( <div>
        <button className="ui purple basic button" onClick={addTask}>add task</button>
      {props.taskList.map(item=>
      <Task task={item} key={item.id} showIcons={true} />
      )} 
    </div> );
}
 const mapStateToProps=state=>{
   return {
     taskList:state.task.taskList,
     userId:state.user.currentUser.id
   }
 }
export default connect(mapStateToProps,{getAllTasks,addTask}) (TaslList);