import { useState, useEffect } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const [text, setText] = useState("");

  const [loading, setLoading] = useState(true); //try false

  const [page, setPage] = useState(1);

  useEffect(() => {
      console.log("mounted todos");
    getData();

  //curried function
  return () =>{
      //closure
      console.log("unmounted todos")
  }


  }, [page]);

  const getData = async () => {
    const data = await fetch(
      `http://localhost:8080/todos?_page=${page}&_limit=3`
    ).then((d) => d.json());

    setTodos(data);
    setLoading(false); //try true
  };

  console.log(page)
  return loading ? (
    "Loading....."
  ) : (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter todo"
      />

      <button
        onClick={() => {
          const payload = {
            title: text,
            status: false,
          };
          fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then(() => {
            getData();
          });
          // axios.post("http://localhost:8080/todos",payload)
        }}
      >
        Add todo
      </button>
      {todos.map((t) => (
        <div>
          {t.id}
          {t.title}
        </div>
      ))}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
        
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
