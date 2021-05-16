import './App.css';
import React,{useState,useEffect} from 'react';
//import compoents
import Form from "./components/Form";
import TodoList from "./components/TodoList";



function App() {

  //states
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [edit,setEdit] = useState(null);
  const [editText,setEditText] = useState("");
  const [search,setSearch] = useState("");
  const [prioritysort,setPrioritysort] = useState(null);
  const [editpriority,setEditpriority] = useState("");
  const [listpriority,setListpriority] = useState("");

  //use effect
  useEffect(()=>{
    filterHandler();
  },[todos,status])

  useEffect(() =>{
    searchHandler();
  },[search,todos])

  useEffect(()=>{
    sortHandler()
  },[todos,prioritysort])

  //fuctions
  const filterHandler = () => {
    switch (status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'process':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  }

  const searchHandler = () => {
    setFilteredTodos(todos.filter((todo) => {
     return todo.text.includes(search)
    }))

  }

  const sortHandler = () =>{
    
    setFilteredTodos(todos.sort((a,b) =>{
      console.log(a.priority)
      console.log(b.priority)

      if(b.priority < a.priority) {
         return 1;
       }
       if(b.priority > a.priority) {
        return -1;
      }
      return 0;
    }))

  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form todos={todos}
      setTodos = {setTodos}
      setInputText={setInputText}
      inputText={inputText} 
      setStatus={setStatus}
      search={search}
      setSearch = {setSearch}
      
      />
      <TodoList 
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos}
      setEdit={setEdit}
      setEditText={setEditText}
      editText={editText}
      edit={edit}
      setPrioritysort = {setPrioritysort}
      prioritysort = {prioritysort}
      editpriority = {editpriority}
      setEditpriority = {setEditpriority}
       />
    </div>
  );
}

export default App;
