import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

function Header(props) {
  return (
    <header className={props.className}>
      <h1>
        <a href="#" onClick={props.onSelect}>
          WWW
        </a>
      </h1>
    </header>
  );
}

const HeaderStyled = styled(Header)`
  border-bottom: 1px solid gray;
`;

function Nav(props) {
  const list = props.data.map((e) => (
    <li key={e.id}>
      <a
        href={'/read/' + e.id}
        onClick={(evt) => {
          evt.preventDefault();
          props.onSelect(e.id);
        }}
      >
        {e.title}
      </a>
    </li>
  ));
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onCreate(e.target.title.value, e.target.body.value);
        }}
      >
        <p>
          <input name="title" type="text" placeholder="title"></input>
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="create"></input>
        </p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(3);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ]);
  console.log(mode, id);
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
      <HeaderStyled
        onSelect={(e) => {
          e.preventDefault();
          alert('Header!');
          setMode('WELCOME');
          setId(null);
        }}
      ></HeaderStyled>
      <Nav
        data={topics}
        onSelect={(id) => {
          alert('Nav!!' + id);
          setMode('READ');
          setId(id);
        }}
      ></Nav>
      {content}
      <br />
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        <Button
          variant="outlined"
          onClick={() => {
            setMode('CREATE');
          }}
        >
          create
        </Button>
        <Button variant="outlined">update</Button>
      </ButtonGroup>
      <Button variant="outlined" onClick={() => {}}>
        delete
      </Button>
    </div>
  );
}

export default App;
