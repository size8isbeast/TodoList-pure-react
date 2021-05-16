import React from 'react';
// import compents
import Todo from './Todo';

const TodoList = ({todos, setTodos,filteredTodos,setEdit,
    setEditText,editText,edit,setPrioritysort,prioritysort,
    setEditpriority,editpriority}) => {
    
    return (
        <div id = "todos-container">
            <ul id = "todos-list">
                {filteredTodos.map((todo) =>(
                    <Todo 
                    setTodos={setTodos} 
                    todos={todos}
                    key={todo.id}
                    todo={todo}
                    text={todo.text}
                    setEdit={setEdit}
                    setEditText={setEditText}
                    editText={editText}
                    edit={edit}
                    setPrioritysort = {setPrioritysort}
                    prioritysort = {prioritysort}
                    setEditpriority = {setEditpriority}
                    editpriority ={editpriority} />
                ))}
            </ul>
        </div>
        
    );

};

export default TodoList;