import { Route, Routes } from 'react-router-dom'
import './styles/style.css'
import Home from './components/pages/home/Home'
import Topbar from './components/pages/layout/Topbar'
import Navbar from './components/pages/layout/Navbar'
import Footer from './components/pages/layout/Footer'
import Login from './components/pages/user/Login'
import Register from './components/pages/user/Register'
import About from './components/pages/About'
import Booking from './components/pages/Booking'
import Contacts from './components/pages/Contacts'
import NotFound from './components/pages/NotFound'
import Logout from './components/pages/user/Logout'
import Service from './components/pages/home/Service'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import { AuthProvider } from './context/authContext'
import AuthGuard from './guards/AuthGuard'

function App() {

    return (
        <ErrorBoundary>
            <AuthProvider>

            <Topbar />
            <Navbar />

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contacts/>}/>
                <Route path='/services' element={<Service/>}/>

                <Route element={<AuthGuard/>}>
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='/booking' element={<Booking/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>

            <Footer />
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App
