import { Badge } from 'reactstrap'
import { H4, H5, LI, UL } from '../../../../AbstractElements'
import { ToDoProp } from '../../../../Types/Apps/Todo/TodoTypes'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../../../ReaduxToolkit/Hooks'
import { removeItems, updateTodo } from '../../../../ReaduxToolkit/Reducer/ToDoSlice'

const TodoList = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todo);

    const handleRemoveTodo = (id:number,title:string) => {
        dispatch(removeItems(id));
        toast.success(`${title} deleted`);
    }
    const handleMarkedTodo = (item: ToDoProp) => {
      if (item.status === "completed") {
        dispatch(updateTodo({ id: item.id, status: "pending", badgeClass: "bg-light-danger text-danger"}));
        toast.error(item.title + " as Incomplete");
      } else if (item.status === "pending") {
        dispatch(updateTodo({ id: item.id, status: "completed", badgeClass: "bg-light-success text-success" }));
        toast.success(item.title + " as Complete");
      }
    };
  return (
    <div className="todo-list-body">
      <UL id="todo-list" className='simple-list'> 
        {todoList.length > 0
          ?todoList.map((todo, index) => (
            <LI className={`task ${todo.status === "completed" ? "completed" : ""}`}  key={index} onClick={() => handleMarkedTodo(todo)}>
                <div className="task-container">
                    <H4 className="task-label">{todo.title}</H4>
                    <div className="d-flex align-items-center gap-4">
                        <Badge className={`${todo.badgeClass}`} color=''>{todo.badge}</Badge>
                        <H5 className="assign-name m-0">{todo.timeLimit}</H5>
                        <span className="action-box large delete-btn" onClick={() => handleRemoveTodo(todo.id, todo.title)}>
                            <i className="icon"><i className="icon-trash" /></i>
                        </span>
                    </div>
                </div>
            </LI>
        )): ""}
      </UL>
    </div>
  )
}

export default TodoList