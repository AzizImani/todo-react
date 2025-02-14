import axios from "axios";
import { ChangeEvent, useState } from "react";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    axios
      .post("http://localhost:8080/todos", { title: inputValue })
      .then((response) => {
        setInputValue("");
        //onInsert();
      })
      .catch((error) => {});
  };

  return (
    <div className="row m-1 p-3">
      <div className="col col-11 mx-auto">
        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
          <div className="col">
            <input
              className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
              type="text"
              placeholder="Add new .."
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-auto m-0 px-2 d-flex align-items-center">
            <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none"></label>
            <i
              className="fa fa-calendar my-2 px-1 text-primary btn due-date-button"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Set a Due date"
            ></i>
            <i
              className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Clear Due date"
            ></i>
          </div>
          <div className="col-auto px-0 mx-0 mr-2">
            <button
              type="button"
              className="btn btn-primary"
              disabled={!inputValue}
              onClick={() => handleClick()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
