import React from "react";
import AddForm from "../components/form";
import Todos from "../components/todos";

const Layout = () => {
  return (
    <>
      <AddForm />
      <Todos></Todos>
    </>
  );
};

export default Layout;
