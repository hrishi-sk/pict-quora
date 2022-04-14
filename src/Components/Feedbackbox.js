import React from 'react'
import { Avatar } from '@material-ui/core';
import '../css/Question.css'
// import "../css/Nav.css"

function Feedbackbox({Id, feedback, quser}) {
  return (
    <div className="question">
            <div className="title">
                <Avatar
                    src={quser.photo}
                />
                <h5>{quser.displayName ? quser.displayName : quser.email}</h5>

            </div>
            <div className="body">
                <div className="que">
                    <p>{feedback}</p>
                </div>
                
            </div>
        </div>
  )
}

export default Feedbackbox