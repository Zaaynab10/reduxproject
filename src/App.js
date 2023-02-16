
import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import AddTask from './AddTask';
import  {IsDone, Uncompleted } from './ListTask'
import Task from './Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const styleApp={
   border:" solid 2px rgba(253, 242, 242, 0.616)",
   width:"540px",
   height:"725px",
   position:"relative",
   left:"443px",
   textAlign:"center",
   borderRadius:"7px 7px 7px 7px",
  }
  return (
    <div className='styleTask' style={styleApp}>
     <h1 style={{fontFamily: "'Babylonica', cursive" , color:"white" ,position:"relative" ,right:"120px",top:"640px",fontSize:"28px"}}> Daily Routine . </h1>
  
      <Routes>
        <Route path="/" element={<AddTask />}>
        <Route path="/All" element={<Task />}/>
        <Route path="todo" element={<Uncompleted/>}/>
        <Route path="completed" element={<IsDone/>}/>
        </Route>
      </Routes>
   
  
   
    </div>
  );
}

export default App;
