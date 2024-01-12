import React, { useState } from 'react'
 
import './Todo.css'



function TodoWork() {
    
  const [Todos, setTodos] = useState([])
  const [InputValue, SetInputValue] =useState("")
  
  // const [DescripList, setDescriptist] = useState([])
  const [Description,setDescription] =useState("")
 
 
  
  const Delete =(id)=>{
    console.log("Deleted")
    setTodos((prevTodos)=> prevTodos.filter((item)=> item.Id !== id ))
  }
  
  const AddInput =()=>{
    if(!InputValue.trim()|| !Description.trim()){
      alert("please fill both  input")
    
     } else{
    const newId = Todos.length + 1;
    const DataObj ={
      name: InputValue,
      Description: Description,
      createdAt: new Date().toLocaleString() ,
      Id : newId
      
    }
    setTodos([...Todos,DataObj])
    SetInputValue("")
    setDescription("")
    
    
  }
}
  return (
    <>
    <div className='table-responsive-sm' > 
    <table className='table  rounded-3'  border="1px solid #cccc">

      <thead className='thead-light'>
    <tr className='table-Head '>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col" >Action</th>
    </tr>
    </thead>
    <tr>
      <td>
        <input placeholder="Enter Name...." type='text' value={InputValue} class="form-control input" 
        onChange={(e)=>SetInputValue(e.target.value) }
        /> {/* name input */}
      </td>
      <td>
        <input placeholder="Add Description...." value={Description} class="form-control input"
               onChange={(e)=>setDescription(e.target.value) }
        />  {/* Description */}
        </td>
      <td >
        <div className='add-Btn '>
      <button class="btn btn-success  " 
      onClick={AddInput}
      >Add Task</button>
        </div>
      </td>
    </tr>
  </table>
  
    </div>
  
      <table class="table table-sm table-light">
  <thead>
  <tr className='table-Head'>
      <th scope="col">Name</th>
      <th scope="col">Created At</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
   { Todos.map((item)=>{
    return(
        <tr key={item.Id} className='Table-List'>
          <td>{item.name}</td>
          <td>{item.createdAt}</td>
          <td>{item.Description}</td>
          <td><button type=""    className='btn btn-danger'
          onClick={()=>{Delete(item.Id)}}
          
          >delete</button></td>


        </tr>
    )
      })
    }
  
    
  </tbody>
</table>
    </>
  )
  
}

export default TodoWork
