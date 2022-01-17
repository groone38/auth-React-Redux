import './App.css';
import Auth from "./Auth";
import { Routes, Route} from "react-router-dom";
import Home from "./Home";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' exact element={<Auth />}/>
                <Route path='/home' element={<Home />}/>
            </Routes>
        </>
    );
}

export default App;
