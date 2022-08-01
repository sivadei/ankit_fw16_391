import { useState } from "react";
function AddItem({handleAddTodo}) {

  const [text,setText]=useState("");
  const[todos,setTodos]=useState([])

  const handlechange =(e) =>{setText(e.target.value)};

  const[count,setCount]=useState(0);
  const onClick =()=>{
setCount(count+1)
console.log(count)
    handleAddTodo(text);
    setText("");
  }

 

  return (
    <div>
      <input 
      data-testid="input" 
      placeholder="add something"
      onChange={handlechange}
      value={text} />
      <button 
      data-testid="add-btn"
      disabled={count===5}
      onClick={onClick}
      >ADD</button>
    </div>
  );
}

export default AddItem;
