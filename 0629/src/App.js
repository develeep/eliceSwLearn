import { Link, Route, Routes } from "react-router-dom";

function Header() {
  return <header>
    <h1>
      <Link to="/">WEB</Link>
    </h1>
  </header>;
}


function Nav() {
  return <nav>
    <ol>
      <li><Link to="/read/1">html</Link></li>
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
  return <article>
    <h2>Read</h2>
    Hello, Read
  </article>
}

function App() {
  return (
    <div className="App">
      <Header></Header>      
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </div>
  );
}

export default App;
