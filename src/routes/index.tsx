import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Section from "../pages/Section"
import Complaint from "../pages/Complaint"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<Navigate to='/home' />} />
            <Route path='/section' element={<Section/>}/>
            <Route path='/complaint' element={<Complaint/>}/>

        </Routes>
    )
}

export default RoutesMain