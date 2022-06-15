import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/Article';
import { Create } from './components/Create';
import { HeaderStyled } from './components/HeaderStyled';
import { Nav } from './components/Nav';

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(3);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ]);
  
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB!"></Article>;
  } else if (mode === 'READ') {
    const topic = topics.filter((e) => e.id === id)[0];
    console.log(topic);
    content = <Article title={topic.title} body={topic.body}></Article>;
  } else if (mode === 'CREATE') {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: nextId, title, body };
          setTopics((current) => {
            const newTopics = [...current, newTopic];
            return newTopics;
          });
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  }

  return (
    <div>
      <HeaderStyled onSelect={handleHeader()}></HeaderStyled>
      <Nav data={topics} onSelect={HandleNav()}></Nav>
      {content}
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
