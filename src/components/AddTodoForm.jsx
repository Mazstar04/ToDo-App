import { useState } from "react";
import { useEffect } from "react";
import ToDoCategories from "./ToDoCategories";
import ToDOInputs from "./ToDoInputs";

const AddToDoForm = ({addAction, categories, state}) => {

    const [userInput, setUserInput] = useState({
        id: null,
        task: "",
        date: "",
        time: "",
        categories: [],
        isDone: false,
    });

    const [userCategories, setUserCategories] = useState([]);


    const addToUserCategories = (category) => {

        if (!userCategories.some(t => t === category)) {
            setUserCategories([...userCategories, category])
        }
        else{
            setUserCategories(userCategories.filter(c=> c != category));
        }
    };
   
    useEffect(() => {
    }, [userInput])

    const handleChange = (e) => {
        setUserInput({
            
            ...userInput,
            [e.target.id]: e.target.value
        })
    }
    
    const addNewItem = () =>{
        
        const newItem = {
            ...userInput,
            id: Math.floor(Math.random() * 100),
            categories: userCategories,

        }
        
        addAction(newItem);
        state();
    }

    return (
        <div className="add-task-container container">
            <div className="input-fields">
                <ToDOInputs type="text" id="task" func={handleChange} value={userInput.value}/>
                <ToDOInputs type="date" id="date" func={handleChange} value={userInput.date}/>
                <ToDOInputs type="time" id="time" func={handleChange} value={userInput.time}/>
            </div>        
            <ToDoCategories  addCategory={addToUserCategories} userCat={userCategories} categories={categories}/>
            <button onClick={addNewItem}className="save-task">Save Task</button>
        </div>
    )
}

export default AddToDoForm;