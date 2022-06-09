import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';

function Header(props) {
  return (
    <div>
      <h1>
        <a href="#" onClick={props.onSelect}>
          WWW
        </a>
      </h1>
    </div>
  );
}

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

function createHandler() {}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ];
  console.log(mode, id);
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB!"></Article>;
  } else if (mode === 'READ') {
    const topic = topics.filter((e) => e.id === id)[0];
    console.log(topic);
    content = <Article title={topic.title} body={topic.body}></Article>;
  }

  return (
    <div>
      <Header
        onSelect={(e) => {
          e.preventDefault();
          alert('Header!');
          setMode('WELCOME');
          setId(null);
        }}
      ></Header>
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
            alert('create!');
          }}
        >
          create
        </Button>
        <Button variant="outlined">update</Button>
      </ButtonGroup>
      <Button variant="outlined">delete</Button>
    </div>
  );
}

export default App;
