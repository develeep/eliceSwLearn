import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <div>
      <h1>
        <a href="">Web</a>
      </h1>
    </div>
  );
}

function Nav(props) {
  console.log(props.data)
  const list = props.data.map((e)=>{
    return <li key={e.id}><a href={'/read/'+e.id}>{e.title}</a></li>
  })
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  console.log(props.title);
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
  ];
  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="Welcome" body="HTML is...."></Article>
    </div>
  );
}

export default App;
