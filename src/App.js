import './App.css';
import Sidebar from './Component/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <p className = 'center-test'>
        Conteudo Central
      </p>
      <Sidebar />
    </div>
  );
}

export default App;
