import { useSelector,useDispatch } from "react-redux";
import {addAction} from "./store/index.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function Task(){
const tasks=useSelector(state=>state.addTodo.tasks)
const dispatch=useDispatch()
//
//
const styleDelete={
    position:'relative',
   color:"white",
   backgroundColor:"#0e0d0d1f",
   left:"223px",
   bottom:"14px",
   border:"none"
}
//
const styleInput={
position:"relative",
right:"230px",
bottom:"8px",
}
//
const styleTask={
    position:'relative',
        top:'150px',
        height:"40px",
       color:"white",
       width:"420px",
       left:"64px",
      fontSize:"12px",
      fontFamily: "'Babylonica', cursive"
}
//
    return(
        <div>
            <div> 
                {tasks.map((task)=>{
                    return (
                    <div style={styleTask}>
                    <div style={{position:"relative",top:"10px", right:"100px"}}>{task.description} </div> 
                    <button style={styleDelete} onClick={()=>{dispatch(addAction.deleteTask(task.id))}}><FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} /></button>
                    <input style={styleInput} type="checkbox" checked={task.isDone} onChange={()=>{dispatch(addAction.toggleTask(task.id))}} /> 
                    </div>
                    )
                })}
            </div>

        </div>
    )
}