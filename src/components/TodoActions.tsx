import axios from "axios";

interface Props {
  id: number;
  onRemove: (id: number) => void;
}

const removeTodo = function (id: number, onRemove: (id: number) => void) {
  axios
    .delete(`http://localhost:8080/todos/${id}`)
    .then((response) => {
      onRemove(id);
    })
    .catch((error) => {});
};

function TodoActions({ id, onRemove }: Props) {
  return (
    <div className="row d-flex align-items-center justify-content-end">
      <h5 className="m-0 p-0 px-2">
        <i
          className="fa fa-pencil text-info btn m-0 p-0"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Edit todo"
        ></i>
      </h5>
      <h5 className="m-0 p-0 px-2">
        <i
          className="fa fa-trash-o text-danger btn m-0 p-0"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Delete todo"
          data-todo-id={id}
          onClick={() => removeTodo(id, onRemove)}
        ></i>
      </h5>
    </div>
  );
}

export default TodoActions;
