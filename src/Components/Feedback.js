import React from 'react';
import db from '../firebase';
import { useState, useEffect } from 'react';
import Feedbackbox from './Feedbackbox';

function Feedback() {
  const[posts, setPost]= useState([]);

  
  useEffect(() => {
    db.collection('feedback').onSnapshot(snapshot => setPost(snapshot.docs.map((doc)=>(({
        id: doc.id,
        feedback:doc.data()
    })))));
  
  }, [])
  
  return (
    <div className="feedback">
      {
                posts.map(({id,feedback})=>(
                    <Feedbackbox
                     key={id}
                     Id={id}
                     feedback={feedback.feedback}
                     quser={feedback.user}
                    />
                ))
            }
    </div>
  )

  }

export default Feedback;
