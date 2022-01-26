
const ToDoCategories = ({addCategory ,userCat, categories}) => {

    const handleClick = (e) => {
        addCategory(e.target.id);
    }

    return ( 
        <div className="task-type-container">
            {categories.map(m => <span className={`task-types ${userCat.some(u => u==m.id) ? "selectedCategory" : ""} `} key={m.id} id={m.id} onClick={handleClick} >{m.description}</span>)}
        </div>
     );
}
 
export default ToDoCategories;