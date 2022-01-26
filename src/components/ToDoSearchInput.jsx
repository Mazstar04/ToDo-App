const ToDoSearchInput = ({searchToDo}) => {
    return (  
        <>
            <input className="input-search-field" type="search" placeholder="Search Task" onChange={searchToDo} />

        </>
    );
}
 
export default ToDoSearchInput;