import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Signin from '../pages/Signin'
import User from '../pages/User'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route path='/login' element={<Signin />} />
                <Route path='/profile' element={<User />} />
            </Routes>
        </BrowserRouter>
)
}

export default AppRouter