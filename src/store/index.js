import { configureStore , createSlice} from "@reduxjs/toolkit";
const addSlice=createSlice({
  name:"add",
  initialState:
  {tasks:[
  {id:1,description:"Faire du sport" ,isDone:false},
  {id:2,description:"Acheter ma creatine" ,isDone:false},
  {id:3,description:"Aller chez le dentiste" ,isDone:true}
  ]},
  reducers:{
    //First reducer
  addTask(state,action){
  const newTask={
        id: Date.now(),
        description:action.payload,
        isDone:false,
  }
  state.tasks.push(newTask)},
//Second reducer
deleteTask(state, action) {
    const itemId = action.payload;
    const itemIndex = state.tasks.findIndex((item) => item.id === itemId);
    state.tasks.splice(itemIndex, 1); //pour supprimer notre elemnt a l'index itemindex
  },
//third reducer 
toggleTask(state,action){
const item=state.tasks.find((item) => item.id === action.payload)
item.isDone=!item.isDone
},
}
})
export const addAction=addSlice.actions
export const  store=configureStore({
 reducer:{
   addTodo:addSlice.reducer,
 }
})