
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  const tite = "Welcome to this new Blog";

  const likes = 50;

  const link = 'http://www.google.com';

  return (
    <div className="App">
      <Navbar />
      <div className="content">

        <Home></Home>


        <h1>{tite}</h1>
        <p>Liked {likes} times</p>
        <p> {"Hello"}</p>
        <p> {10}</p>
        <p> {[1,2,3,4,5]}</p>
        <p> {Math.random() * 10}</p>

        <a href={link}>Google site</a>

      </div>
    </div>
  );
}

export default App;
