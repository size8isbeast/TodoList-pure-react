import React from "react";

const Form = ({ setInputText,todos, setTodos, inputText,setStatus,setSearch}) =>{
    //functions
    const inputTextHandler = (e) =>{
        // console.log(e.target.value);
        setInputText(e.target.value);
    };
    //prevent re-fesh
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*100, priority:1}
        ])
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }    
    //search 
    const getSearchHandler = (e)=>{
        setSearch(e.target.value);
        
    }

    //sort


    return (
        <form>
            <input 
            value={inputText}
            onChange={inputTextHandler} 
            type = "text" 
            id = "todo-input"></input>
            <button onClick= {submitTodoHandler} id ="todo-button" type = "submit">
                add to list
            </button> 
            <div id = "select">
            <span>Status</span>
                <select onChange={statusHandler} name = "todo" id = "filter-todo">
                    <option value="all">All</option>
                    <option value="process">In Process</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <input 
            type = "text" 
            id = "search-input" 
            onChange={getSearchHandler}>
            </input>
        </form>
    );
};

export default Form;