import { Routes, Route } from 'react-router-dom'
import Login from '../views/login/login'

function RootRoute(){
    return (
        <Routes>
            <Route path='/' element={<Login />}></Route>
        </Routes>
    )
}

export default RootRoute