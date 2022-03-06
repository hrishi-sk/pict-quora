import React from 'react'
import '../css/Sidebar.css'
import {Link} from "react-router-dom"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sbo">
                <Link to="/">All</Link>
            </div>
            <div className="sbo">
                <Link to="/fe">First Year</Link>
            </div>
            <div className="sbo">
                <Link to="/cs">CS Department</Link>
            </div>
            <div className="sbo">
                <Link to="/it">IT Department</Link>
            </div>
            <div className="sbo">
                <Link to="/etc">E&TC Department</Link>
            </div>
            <div className="sbo">
                <Link to="/tp">T&P Cell</Link>
            </div>
            <div className="sbo">
                <Link to="/clubs">PICT Clubs</Link>
            </div>
            <div className="sbo">
                <Link to="/hm">Hostel and Mess</Link>
            </div>
            <div className="sbo">
                <Link to="/fb">Feedbacks</Link>
            </div>
        </div>
    )
}

export default Sidebar
