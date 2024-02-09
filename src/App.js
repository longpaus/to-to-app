import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div style={{
      height: '100vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#232323',

    }}
    >
      <Home />
    </div>
  );
}

export default App;
