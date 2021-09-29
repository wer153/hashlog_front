import SideBar from './components/sideBar';
import Vocabulary from './components/vocabulary';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header"> header</header>
      {/* <NavigationBar></NavigationBar> */}
      <div className="container">
        <SideBar></SideBar>
        <Vocabulary></Vocabulary>
      </div>
    </div>
  );
}

export default App;
