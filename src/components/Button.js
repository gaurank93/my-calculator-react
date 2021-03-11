import "./button.css";

function Button({ lable, type = "", onClick }) {
  return (
    <div className="Button">
      <button onClick={(e) => onClick(e)} value={lable} className={`button-def ${btnType(type)}`}>
        {lable}
      </button>
    </div>
  );
}

const btnType = (type) => {
  switch (type) {
    case "op":
      return "button-op";
    case "pow":
      return "button-pow";
    default:
      return "";
  }
};

export default Button;
