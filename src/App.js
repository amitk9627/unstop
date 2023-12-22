import './App.css';
import {Routes,Route} from 'react-router-dom'
import Assessment from './routes/Assessment'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Assessment />} />
    </Routes>
     
    </>
  );
}

export default App;
