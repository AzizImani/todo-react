interface Props {
  completed: boolean;
  id: number;
  onInsert: (id: number) => void;
}

function TodoButton({ completed, id, onInsert }: Props) {
  return (
    <div className="col-auto m-1 p-0 d-flex align-items-center">
      <h2 className="m-0 p-0 todos-actions">
        <i
          className={
            completed
              ? "fa text-primary btn m-0 p-0 complete-btn {todo.completed ? fa-check-square-o"
              : "fa text-primary btn m-0 p-0 complete-btn fa-square-o"
          }
          data-toggle="tooltip"
          data-placement="bottom"
          title="Mark as complete"
          data-todo-id={id}
        ></i>
      </h2>
    </div>
  );
}

export default TodoButton;
