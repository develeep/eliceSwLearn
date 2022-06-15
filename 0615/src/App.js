import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Article } from './components/Article';
import { Create } from './components/Create';
import { HeaderStyled } from './components/HeaderStyled';
import { Nav } from './components/Nav';
import { Read } from './components/Read';

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(3);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ]);
  


  return (
    <div>
      <HeaderStyled onSelect={handleHeader()}></HeaderStyled>
      <Nav data={topics} onSelect={HandleNav()}></Nav>
      <Routes>
        <Route path='/' element={<Article title="Welcome" body="Hello, WEB!"></Article>} />
        <Route path='create' element={(
          <Create
            onCreate={handleOnCreate()}
          ></Create>
        )} />
        <Route path='/read/:id' element={<Read topics={topics} />} />
      </Routes>
      <br />
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        <Button
          component={Link}
          to="/create"
          variant="outlined"
          onClick={handleCreate()}
        >
          create
        </Button>
        <Button variant="outlined">update</Button>
      </ButtonGroup>
      <Button variant="outlined" onClick={handleDelete()}>
        delete
      </Button>
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

  function HandleNav() {
    return (id) => {
      setMode('READ');
      setId(id);
    };
  }

  function handleDelete() {
    return () => {
      const newTopics = topics.filter((e) => {
        if (e.id === id) {
          return false;
        } else {
          return true;
        }
      });
      setMode('WELCOME');
      setTopics(newTopics);
    };
  }

  function handleCreate() {
    return () => {
      setMode('CREATE');
    };
  }

  function handleHeader() {
    return () => {
      setMode('WELCOME');
    };
  }
}

export default App;
