import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Create } from './Create';
import { Header } from './Header.1';
import { Nav } from './Nav';
import { Read } from './Read';
import { Update } from './Update';

function Welcome() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

function Control() {
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link to="/create">create</Link>
      </li>
      {id && (
        <>
          <li>
            <Link to={`/update/${id}`}>update</Link>
          </li>
          <li>
            <Link to={`/delete/${id}`}>delete</Link>
          </li>
        </>
      )}
    </ul>
  );
}

function App() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  async function getTopics() {
    const res = await fetch('/topics');
    const data = await res.json();
    setTopics((_data) => data);
  }
  async function createHandler(title, body) {
    const data = { title, body };
    const res = await fetch('/topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    getTopics();
    navigate(`/read/${result.id}`);
  }

  async function updateHandler(title, body, id) {
    const data = { title, body };
    const res = await fetch('/topics/'+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    getTopics();
    navigate(`/read/${result.id}`);
  }
  async function deleteHandler(id) {}

  useEffect(() => {
    getTopics();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Nav topics={topics}></Nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/create" element={<Create onCreate={createHandler} />} />
        <Route
          path="/update/:id"
          element={<Update onUpdate={updateHandler} />}
        />
        <Route
          path="/delete/:id"
          // element={<Delete onDelete={deleteHandler} />}
        />
      </Routes>
      <Routes>
        <Route path="*" element={<Control />} />
        <Route path="/read/:id" element={<Control />} />
      </Routes>
    </div>
  );
}

export default App;
