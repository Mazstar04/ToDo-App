
import ToDoNavigation from './ToDoNavigation';
import TodoContainer from './TodoContainer';
import ToDoHeader from './ToDoHeader';
import ToDOInputs from './ToDoInputs';
import ToDoSearchInput from './ToDoSearchInput';
import { useEffect, useState } from 'react';

const ToDoPage = ({categories, todos, state, changeNavSate, filter, filterKey, markToDoItem, deleteItem, searchToDo}) => {
    
    const [searchState, setSearchState] = useState(false);

    const changeSearchState = () => {
       setSearchState(!searchState);
    }
    return (  
        <div className="container">
            <div className="header">
                
                {searchState && <ToDoSearchInput searchToDo={searchToDo} todos={todos} filter={filter}/> }
                {!searchState && <ToDoHeader/> }
                <div className="search-icon" onClick={changeSearchState}>
                    <i className="icofont-search-2"></i>
                </div>
               
            </div>
            <ToDoNavigation changeNavSate={changeNavSate} filterKey={filterKey}/>
            <TodoContainer categories={categories} todos={todos} filter={filter} markToDoItem={markToDoItem} deleteItem={deleteItem} />
            
            <div onClick={state} className="add-item-btn">
                    <i className="icofont-ui-add plus"></i> Add Task
                
            </div>
        </div>
    );
}
 
export default ToDoPage;