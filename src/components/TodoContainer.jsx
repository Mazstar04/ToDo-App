
import AddToDoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = ({ categories, todos, filter, markToDoItem , deleteItem}) => {

    // const [showForm, setShowForm] = useState(false);

    return (
        <div>
            {
                todos.filter(t => filter(t))
                .map((t, index) =>
                <TodoItem
                    categories={categories}
                    key={Math.random() * 4000} item={t}
                    index={index}
                    markToDoItem = {markToDoItem}
                    deleteItem = {deleteItem}
                />)
                
                        
            },
        </div>
    )

}



export default TodoContainer