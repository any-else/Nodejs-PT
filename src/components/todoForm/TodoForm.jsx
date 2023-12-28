import axios from "axios";
import React from "react";

const TodoForm = () => {
  const [todo, setTodo] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/todo",
        {
          newTodo: todo,
        },
        { withCredentials: false }
      );
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          placeholder="tạo mới todo"
          style={{
            width: "100%",
            height: "30px",
            marginRight: "10px",
            backgroundColor: "transparent",
            outline: "none",
            border: "1px solid black",
          }}
        />
        <button
          style={{
            padding: "10px 15px",
            width: "100px",
            backgroundColor: "green",
          }}
          type="submit"
        >
          Tạo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
