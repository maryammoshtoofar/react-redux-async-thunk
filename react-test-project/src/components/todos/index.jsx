import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../redux/features/todo-slice";
import TodosSpinner from "../spinner";
import Todo from "../todo";

const Todos = () => {
  const { todosList, loading } = useSelector((state) => state.todosList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <TodosSpinner />
      ) : (
        todosList.map((todo) => <Todo key={todo.id} todo={todo} />)
      )}
    </>
  );
};

export default Todos;
