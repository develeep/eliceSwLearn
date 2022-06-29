import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

function Header() {
  return <header>
    <h1>
      <Link to="/">WEB</Link>
    </h1>
  </header>;
}


function Nav({topics}) {
  return <nav>
    <ol>
      {
        topics.map(topic=>{
          return (
            <li key={topic.id}><Link to={`/read/${topic.id}`}>{topic.title}</Link></li>
          )
        })
      }
    </ol>
  </nav>
}

function Welcome(){
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}

function Read() {
  const params = useParams();
  const id = Number(params.id)
  return <article>
    <h2>Read</h2>
    Hello, Read
  </article>
}

function App() {
  const [topics,setTopics] = useState([])
  async function getTopics(){
    const res = await fetch('/topics')
    const data = await res.json();
    setTopics(_data=>data)
  }
  useEffect(()=>{
    getTopics();
  },[])
  return (
    <div className="App">
      <Header></Header>      
      <Nav topics={topics}></Nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </div>
  );
}

export default App;
