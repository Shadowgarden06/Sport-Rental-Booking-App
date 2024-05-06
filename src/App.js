import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import BasketBall from './page/BasketBall';
import BaseBall from './page/BaseBall';
import Badminton from './page/Badminton';
import Football from './page/Football';
import Register from './page/register/Register';

function App() {
    // const [count, setCount] = useState(2);
    return (
        <div className='App'>
            <Routes>
                <Route element={<HomePage />} path='/' />
                <Route element={<Register/>} path='/register'/>
                <Route element={<BasketBall />} path='/basketball' />
                <Route element={<BaseBall />} path='/baseball' />
                <Route element={<Badminton />} path='/badminton' />
                <Route element={<Football />} path='/football' />
            </Routes>
        </div>
    );
}

export default App;
