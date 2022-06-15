import { Button } from '@mui/material';
import { useState } from 'react';
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
  const [nextId, setNextId] = useState(3);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ]);
  const navigate = useNavigate();

  return (
    <div>
      <HeaderStyled></HeaderStyled>
      <Nav data={topics} ></Nav>
      <Routes>
        <Route
          path="/"
          element={<Article title="Welcome" body="Hello, WEB!"></Article>}
        />
        <Route
          path="create"
          element={<Create onCreate={handleOnCreate()}></Create>}
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

  function handleOnCreate() {
    return (title, body) => {
      const newTopic = { id: nextId, title, body };
      setTopics((current) => {
        const newTopics = [...current, newTopic];
        return newTopics;
      });
      setNextId(nextId + 1);
    };
  }

  function handleDelete(id) {
    setTopics((current) => {
      const newTopics = current.filter((e) => {
        return e.id===id?false:true;
      });
      return newTopics;
    });
    navigate('/');
  }
}

export default App;
