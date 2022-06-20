import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">WEB</Link>
      </h1>
    </header>
  );
}

function Nav(props) {
  const topics = props.data;

  return (
    <nav>
      <ol>
        {topics.map((topic) => {
          return (
            <li key={topic.id}>
              <Link to={`/read/${topic.id}`}>{topic.title}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function Read() {
  const [topic, setTopic] = useState({ title: null, body: null });
  const params = useParams();
  const id = parseInt(params.id);

  async function getTopic() {
    const res = await fetch('http://localhost:3333/topics/' + id);
    const data = await res.json();
    setTopic(data);
  }

  useEffect(() => {
    getTopic();
  }, [topic]);

  return (
    <div>
      <h2>{topic.title}</h2>
      {topic.body}
    </div>
  );
}

function Create(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const body = e.target.body.value;

    props.onCreate(title, body);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create</h2>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}

function Update(props) {
  const params = useParams();
  const id = params.id;
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  async function getTopic() {
    const res = await fetch('http://localhost:3333/topics/' + id);
    const data = await res.json();

    setTitle(data.title);
    setBody(data.body);
  }

  useEffect(() => {
    getTopic();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update</h2>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}

function Control(props) {
  const params = useParams();
  const id = params.id;
  const contextUI = id ? (
    <li>
      <Link to={'/update/' + id}>Update</Link>
    </li>
  ) : null;

  return (
    <ul>
      <li>
        <Link to="/create">Create</Link>
      </li>
      {contextUI}
    </ul>
  );
}

function App() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);

  async function getTopics() {
    const res = await fetch(` http://localhost:3333/topics`);
    const data = await res.json();
    setTopics(data);
  }

  async function HandleCreate(title, body) {
    const data = { title, body };
    const res = await fetch('http://localhost:3333/topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    navigate(`/read/${result.id}`);
    getTopics();
  }

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Nav data={topics}></Nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2>Welcome</h2>Hello,React!
            </>
          }
        />
        <Route path="/read/:id" element={<Read></Read>} />
        <Route
          path="/create"
          element={<Create onCreate={HandleCreate}></Create>}
        />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      <Routes>
        {['/', '/read/:id', '/create', '/update/:id'].map((e) => {
          return <Route key={e} path={e} element={<Control loc={e} />}></Route>;
        })}
      </Routes>
    </div>
  );
}

export default App;
