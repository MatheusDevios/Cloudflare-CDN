import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Question1 from './Pages/Question1';
import Question2 from './Pages/Question2';
import Question3 from './Pages/Question3';
import Question4 from './Pages/Question4';
import Question5 from './Pages/Question5';
import Question6 from './Pages/Question6';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='App-body'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/question1'
            element={<Question1 />}
          />
          <Route
            path='/question2'
            element={<Question2 />}
          />
          <Route
            path='/question3'
            element={<Question3 />}
          />
          <Route
            path='/question4'
            element={<Question4 />}
          />
          <Route
            path='/question5'
            element={<Question5 />}
          />
          <Route
            path='/question6'
            element={<Question6 />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
