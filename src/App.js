import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRouter from './components/Routes/AllRouter';
import Chakrafooter from './components/salaryguide/Salarymainfooter'
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRouter/>



      <Chakrafooter/>

    </div>

  );
}

export default App;
