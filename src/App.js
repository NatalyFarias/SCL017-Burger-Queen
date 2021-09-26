import './App.css';
import Home from "./views/Home";
import Waiter from './views/Waiter';
import Breakfast from './views/Breakfast';

const App = () => {
  return (
    <div className="App">
      <Home />
      <Waiter />
      <Breakfast />
    </div>
  );
}

export default App;
