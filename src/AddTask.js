import { useDispatch } from "react-redux";
import {useState} from "react"
import {addAction} from "./store/index.js"
import { Outlet,useNavigate} from "react-router-dom";
export default function AddTask(){
const dispatch=useDispatch()
const navigate=useNavigate()
//
const[newTask,setNewTask]=useState("")
const styleInput={
backgroundColor:"white",
borderRadius:"4px 4px 4px 4px",
width:"320px",
position:"relative",
bottom:"60px",
height:"33px",
color:"black",
}
//
const styleButton={
    backgroundColor:"white",
    borderRadius:"4px 4px 4px 4px",
    position:"relative",
    height:"30px",
    width:"35px",
    color:"white",
    border:"none",
    bottom:"57px",
    color:"grey",
    textAlign:"center",
    fontSize:"23px",
    left:"12px"
    }
//
const styleButton1={
    position:"relative",
    top:"42px",
    textAlign:"center",
    width:"80px",
    right:"12px",
    color: "black",
    borderRadius:"5px 5px 5px 5 px",
    height:"30px",
    fontFamily:" 'Babylonica', cursive",
    borderTop:"2px solid orange"
    }
   
    //
const handleNewTask=(event)=>{
  setNewTask(event.target.value)
  console.log(newTask)
}
//
const handleAdding=(event)=>{
    event.preventDefault()
dispatch(addAction.addTask(newTask))
}

//

    return(
        <div >
            <form onSubmit={handleAdding}>
                <input style={styleInput} onChange={handleNewTask} placeholder="Add a new task"/>
                <button style={styleButton}  type="submit">+</button>
            </form>
            <div> 
                <button className="display" style={styleButton1} onClick={()=>navigate("/All")}> All </button>
                <button className="display" style={styleButton1}onClick={()=>navigate("/todo")}> Not Done </button>
                <button className="display"style={styleButton1} onClick={()=>navigate("/completed")}> Done </button>
                <Outlet/>
            </div>

        </div>
    )
}