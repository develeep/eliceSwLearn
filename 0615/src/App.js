import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Article } from './components/Article';
import { Create } from './components/Create';
import { HeaderStyled } from './components/HeaderStyled';
import { Nav } from './components/Nav';
import { Read } from './components/Read';

function Control(props) {
  const params = useParams();
  const id = parseInt(params.id);
  console.log(id);
  let contextUI = null;
  if (id) {
    contextUI = (
      <>
        <Button variant="outlined">update</Button>
        <Button
          variant="outlined"
          onClick={() => {
            props.onDelete(id);
          }}
        >
          delete
        </Button>
      </>
    );
  }
  return (
    <>
      <Button component={Link} to="/create" variant="outlined">
        create
      </Button>
      {contextUI}
    </>
  );
}

function App() {
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ]);
  const navigate = useNavigate();
  useEffect(() => {
    refreshTopics()
  }, []);
  return (
    <div>
      <HeaderStyled></HeaderStyled>
      <Nav data={topics}></Nav>
      <Routes>
        <Route
          path="/"
          element={<Article title="Welcome" body="Hello, WEB!"></Article>}
        />
        <Route
          path="create"
          element={
            <Create
              onCreate={(title, body) => {
                handleOnCreate(title, body);
              }}
            ></Create>
          }
        />
        <Route path="/read/:id" element={<Read topics={topics} />} />
      </Routes>
      <br />

      <Routes>
        {['/', '/read/:id', 'update/:id'].map((path) => {
          return (
            <Route
              key={path}
              path={path}
              element={
                <Control
                  onDelete={(id) => {
                    handleDelete(id);
                  }}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );

  async function refreshTopics() {
      const req = await fetch('http://localhost:3333/topics');
      const data = await req.json();
      setTopics(data);
  }

  async function handleOnCreate(title, body) {
    const res = await fetch('http://localhost:3333/topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });
    const data = await res.json();
    navigate(`/read/${data.id}`);
    refreshTopics()
  }

  async function handleDelete(id) {
    const res = await fetch('http://localhost:3333/topics/'+id,{
      method:'DELETE',
    })
    refreshTopics();
    navigate('/');
  }
}

export default App;
