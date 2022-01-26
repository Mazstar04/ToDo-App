import AddToDoForm from "./AddTodoForm";
import TodoContainer from "./TodoContainer";
import ToDoPage from "./ToDoPage";
import { useState, useEffect } from "react";

const ToDoChanel = () => {

    const categories = [
        {
            description: "School",
            id: 1,
        },
        {
            description: "Work",
            id: 2,
        },
        {
            description: "Everyday",
            id: 3,
        },
        {
            description: "Activity",
            id: 4,
        },
        {
            description: "Life",
            id: 5,
        },
        {
            description: "Home",
            id: 6,
        },
    
     ]; 
    
     const [todos, setTodos] = useState([
      {
          id: 2,
          task: "Go to work",
          date: "2022-01-13",
          time: "07:30",
          categories: [
              1, 2
          ],
          isDone: false,
      },
      {
          id : 3,
          task: "Do assignments",
          date: "2020-01-13",
          time: "07:30",
          categories: [
              3
          ],
          isDone: true,
      },
      {
          id : 4,
          task: "Buy food",
          date: "2022-01-13",
          time: "16:00",
          categories: [
              4, 5, 6
          ],
          isDone: false,
      },
    ]);

    const [filterKey, setFilterKey] = useState(1);
    
    const markToDoItem = (e) =>{
        const checkedItem = todos.find(t=> e.target.id == t.id);
        if(checkedItem.isDone){
            const filteredItem = todos.filter(t => e.target.id != t.id );
            checkedItem.isDone = false;
            setTodos([...filteredItem, checkedItem]);
        }
        else{
            const filteredItem = todos.filter(t => e.target.id != t.id );
            checkedItem.isDone = true;
            setTodos([...filteredItem, checkedItem]);
        }
    }

    const [searchValue, setSearchValue] = useState();

    useEffect(() => {
        console.log(searchValue);
    }, [searchValue])

    const filterTodo = (t) => {
      
        switch(filterKey){
            case 1:
                return (new Date(t.date).toDateString() == new Date().toDateString() && !t.isDone);
                break;
            case 2:
                return (new Date(t.date) > new Date() && !t.isDone);
                break;
            case 3:
                return t.isDone;
                break;
            case 4:
                return !t.isDone;
                break;
            case 5:
                return t.task.toLowerCase().includes(searchValue.toLowerCase());
                break;

        }
    };    

    const searchToDo = (e) => {
       
      setSearchValue(e.target.value);
       setFilterKey(5);
      
    }
    
    const deleteToDo = (e) =>{
        
        const filteredItem = todos.filter(t => e.target.id != t.id );
        setTodos([...filteredItem]);
        
    }

    const addToItem = (item) => {
    
      if (!todos.some(t => t.task.toLowerCase() === item.task.toLowerCase())) {
          setTodos([...todos, item]);
      }
    };

    let [state, setState] = useState("Page");

    const changeState = () => {
        state == "Page" ? setState("AddTask") : setState("Page");
    }

    

    return ( 
        <div>

            { state === "AddTask" && <AddToDoForm categories={categories} addAction={addToItem} state={changeState}/> }
            {state === "Page" && <ToDoPage 
            categories={categories} 
            todos={todos} 
            state={changeState} 
            filter = {filterTodo}
            changeNavSate={setFilterKey}
            searchToDo={searchToDo}
            filterKey={filterKey}
            markToDoItem = {markToDoItem}
            deleteItem = {deleteToDo}/> }
        </div>
       
    )
}
 
export default ToDoChanel;