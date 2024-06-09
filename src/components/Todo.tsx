import DueDate from "./DueDate";
import TodoActions from "./TodoActions";
import TodoButton from "./TodoButton";
import { TodoPropsWithCrud } from "./TodoProps";

function Todo({ id, title, completed, dueDate, onRemove }: TodoPropsWithCrud) {
  return (
    <div className="row px-3 align-items-center todo-item rounded">
      <TodoButton completed={completed} id={id} />

      <div className="col px-1 m-1 d-flex align-items-center">
        <input
          type="text"
          className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
          value={title}
          title={title}
        />
        <input
          type="text"
          className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none"
          value={title}
        />
      </div>

      <div className="col-auto m-1 p-0 px-3 d-none"></div>

      {dueDate && <DueDate dueDate={dueDate} />}

      <div className="col-auto m-1 p-0 todo-actions">
        <TodoActions id={id} onRemove={onRemove} />

        <div className="row todo-created-info">
          <div className="col-auto d-flex align-items-center pr-2">
            <i
              className="fa fa-info-circle my-2 px-2 text-black-50 btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Created date"
            ></i>
            <label className="date-label my-2 text-black-50">
              28th Jun 2020
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
