import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createTodo } from "../../redux/features/todo-slice";
import { useDispatch } from "react-redux";

const AddForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { desc, dob } = e.target;
    const newTodo = {
      title: desc.value,
      deadline: dob.value.toString(),
      completed: false,
    };
    dispatch(createTodo(newTodo));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Todo</h2>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="desc" placeholder="enter new task" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Select Deadline</Form.Label>
        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddForm;
