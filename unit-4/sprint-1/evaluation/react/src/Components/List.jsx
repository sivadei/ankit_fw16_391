import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;

function List() {
  const[todos,setTodos]=useState([]);

  const handleAddTodo=(text)=>{
    const newItem={
      title:text,
      status:false,
      id:new Date().toDateString()+text
    
    };
    setTodos([...todos,newItem]);
   
  }





  




  return (
    <div>
      <AddItem handleAddTodo={handleAddTodo}/>
      <ul>
        {todos.map((item)=>(<ListItem key={item.id} title={item.title} status={item.status}/>))
        }
        </ul>
    </div>
  );
}

export default List;
