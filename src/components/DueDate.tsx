interface Props {
  dueDate: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function DueDate({ dueDate }: Props) {
  const formattedDate = formatDate(dueDate);

  return (
    <div className="col-auto m-1 p-0 px-3 ${todo.dueDate ? '' : 'd-none'}">
      <div className="row">
        <div className="col-auto d-flex align-items-center rounded bg-white border border-warning">
          <i
            className="fa fa-hourglass-2 my-2 px-2 text-warning btn"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="Due on date"
          ></i>
          <h6 className="text my-2 pr-2">{formattedDate}</h6>
        </div>
      </div>
    </div>
  );
}

export default DueDate;
