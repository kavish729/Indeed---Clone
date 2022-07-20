import './App.css';
import Navbar from './components/Navbar/Navbar'
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
