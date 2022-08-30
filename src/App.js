import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader/root';
import VariableList from './pages/VariableList';

function App() {
  return (
    <div className="App">
      <VariableList />
    </div>
  );
}

export default hot(App);
