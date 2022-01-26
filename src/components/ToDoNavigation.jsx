
const ToDoNavigation = ({changeNavSate, filterKey}) => {
    return ( 
        <div className="navbar">
            <a className={`nav-items ${filterKey == 1 ? "active" : ""} `} onClick={() => changeNavSate(1)}>Today</a>
            <a className={`nav-items ${filterKey == 4 ? "active" : ""} `} onClick={() => changeNavSate(4)}>All</a>
            <a className={`nav-items ${filterKey == 2 ? "active" : ""} `} onClick={() => changeNavSate(2)}>Upcoming</a>
            <a className={`nav-items ${filterKey == 3 ? "active" : ""} `} onClick={() => changeNavSate(3)}>TaskDone</a>
        </div>
     );

     
}
 
export default ToDoNavigation;