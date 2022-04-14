import React from 'react'
import '../css/Sidebar.css'
import {Link} from "react-router-dom"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sbo">
                <Link to="/" style={{ textDecoration: 'none', color:'brown',fontSize:'20px' }}>All</Link>
            </div>
            <div className="sbo">
                <Link to="/fe" style={{ textDecoration: 'none', color:'brown',fontSize:'20px' }}>First Year</Link>
            </div>
            <div className="sbo">
                <Link to="/cs" style={{ textDecoration: 'none', color:'brown',fontSize:'20px' }}>CS Department</Link>
            </div>
            <div className="sbo">
                <Link to="/it" style={{ textDecoration: 'none', color:'brown',fontSize:'20px' }}>IT Department</Link>
            </div>
            <div className="sbo">
                <Link to="/etc" style={{ textDecoration: 'none', color:'brown',fontSize:'20px' }}>E&TC Department</Link>
            </div>
            <div className="sbo">
                <Link to="/tp" style={{ textDecoration: 'none', color:'brown',fontSize:'20px' }}>T&P Cell</Link>
            </div>
            <div className="sbo">
                <Link to="/clubs" style={{ textDecoration: 'none', color:'brown',fontSize:'20px' }}>PICT Clubs</Link>
            </div>
            <div className="sbo">
                <Link to="/hm" style={{ textDecoration: 'none', color:'brown',fontSize:'20px' }}>Hostel and Mess</Link>
            </div>
            <div className="sbo">
                <Link to="/fb" style={{ textDecoration: 'none', color:'brown',fontSize:'20px' }}>Feedbacks</Link>
            </div>
        </div>
    )
}

export default Sidebar
