import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Section from "../pages/Section"
import Complaint from "../pages/Complaint"
import Login from "../pages/Login"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<Navigate to='/home' />} />
            <Route path='/section' element={<Section/>}/>
            <Route path='/complaint' element={<Complaint/>}/>
            <Route path='/login' element={<Login/>}/>

        </Routes>
    )
}

export default RoutesMain