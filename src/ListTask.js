import { useSelector } from "react-redux"
export function IsDone(){
const tasks=useSelector(state=>state.addTodo.tasks)
const styleTask={
    position:'relative',
    top:'150px',
    height:"40px",
   width:"420px",
   left:"64px",
   fontSize:"22px",
   backgroundColor:"white",
   color:"black"
  
}
return(<div>
 {tasks.filter((task)=>task.isDone===true).map((task)=>{
                    return ( <div style={styleTask} >
                    <li style={{position:"relative",top:"10px"}}>{task.description} </li> 
                    </div> 
                    )
                })}
     </div>
     )
}
export function Uncompleted(){
    const styleTask={
        position:'relative',
        top:'150px',
        height:"40px",
       width:"420px",
       left:"64px",
       fontSize:"22px",
       backgroundColor:"white",
       color:"black",
       
      
      
    }
    const tasks=useSelector(state=>state.addTodo.tasks)
    return(<div>
     {tasks.filter((task)=>task.isDone===false).map((task)=>{
                        return (
                            <div style={styleTask} >
                            <li style={{position:"relative",top:"10px", }}>{task.description} </li> 
                            </div> 
                        )
                    })}
         </div>
         )
    }