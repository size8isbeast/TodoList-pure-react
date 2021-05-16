import React from 'react';
//el = element
// import 



const Todo = ({text, todo, todos, setTodos, setEdit,setEditText,editText,
    edit,setPrioritysort,prioritysort,setEditpriority,editpriority}) =>{
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        
    };
    const completedHandler = () => {
        setTodos(todos.map(item =>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    const editHandler = (id) =>{
        const updateTodo = [...todos].map((todo) => {
            if(todo.id === id){
                todo.text = editText
            }
            return todo
        })
        setTodos(updateTodo)
        setEdit(null)
        setEditText("")
    }

    const cancelHandler = () =>{
        setEdit(null)
        setEditText("")
    }

    const priorityHandler = (id) =>{
        const updatePriority = [...todos].map((todo) => {
            if(todo.id === id){
                todo.priority = editpriority
            }
            return todo
        })
        
        setEditpriority(updatePriority)
        setPrioritysort(null)
        setEditpriority("")
    }

    return (
        <div className="todo">
            
            <li>
               <input 
               onClick={()=>setPrioritysort(todo.id)}
               className = "priority-sort"
               type="number"
               min="0"
               setp="1"
               value= { prioritysort === todo.id ? (
               editpriority)
               :
               (todo.priority) }
               onChange = {(e) => {setEditpriority(e.target.value)}}
               onBlur = {()=>priorityHandler(todo.id)}
               >
                
               </input>
                    
             
            {edit === todo.id ? (
            <input 
                type = "text" 
                onChange={(e)=> setEditText(e.target.value)} 
                value={editText} >
            </input>)
            :
            (<div onClick={completedHandler} className = {`todo-item ${todo.completed ? "completed" : ''}`}>{text}</div>)}
            </li>
                
                <button onClick={()=>setEdit(todo.id)} className = "edit-btn"> edit</button>
                <button onClick={deleteHandler} className = "delete-btn"> delete</button>
                <button onClick ={()=>editHandler(todo.id) } className = "edit-btn">submit changes</button>
                <button onClick ={cancelHandler} className = "edit-cancel-btn">cancel changes</button>
        </div>

    );
};


export default Todo;