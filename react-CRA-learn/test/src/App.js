import { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setItems([...items, input]);
    setInput('');
  };
  const deleteHandler = (e) => {
    e.preventDefault()
    const newItems = items.filter((el,index)=>index!== e.target.key)
    setItems(newItems)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Enter a Todo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a todo"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </form>
      <ListGroup>
        {items.map((item,index) => (
          <div key={index}><ListGroup.Item >{item}</ListGroup.Item><Button key={index} onClick={deleteHandler}>Delete</Button></div>
        ))}
      </ListGroup>
    </>
  );
}

export default App;
