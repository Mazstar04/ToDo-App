
const TodoItem = ({item, index, categories, markToDoItem, deleteItem}) => {

    const dateArray = new Date(item.date).toString().split(" ");
    const date = dateArray[1] + " " + dateArray[2] + " " + dateArray[3];
    const check = item.isDone == true ? true : false;
    return(
        <div className="card"  style={{
            backgroundColor: index % 2 == 0 ? '#4beed1' : '#fbe114'
        }} >
           <div className="task-header">
                <div className="categories">
                    {
                        item.categories.map( c =>
                            <span key={Math.random() * 4000} className="category-item">
                                {categories.find(t=> t.id == c).description}
                            </span>
                        )
                    }
                </div>
                <div className="edit-icon">
                    <i id={item.id} onClick={deleteItem} className="icofont-bin"></i>
                </div>
           </div>
           <div className="task-main">
                <span>{item.task}</span>
           </div>
           <div className="task-bottom">
               <div className="date-time">
                    <span className="date">
                    <i className="icofont-ui-calendar"></i> {date}
                    </span>
                    <span className="time">
                    <i className="icofont-clock-time"></i> {item.time}
                    </span>
               </div>
                <div className="mark">

                   { check ? <input type="checkbox" checked  id={item.id} onClick={markToDoItem} />:<input type="checkbox"  id={item.id} onClick={markToDoItem} />}
                </div>
           </div>

        </div>
    )
}

export default TodoItem;