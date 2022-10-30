import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import MainWindow from "./components/MainWindow/MainWindow";

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <MainWindow />
    </div>
  );
}

export default App;
