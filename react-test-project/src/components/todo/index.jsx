import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
const Todo = ({ todo }) => {
  return (
    <Card className="mt-3" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              value={todo.completed}
            />
          </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default Todo;
