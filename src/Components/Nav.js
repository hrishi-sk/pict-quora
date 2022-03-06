import React, { useState} from 'react'
import Search from '@material-ui/icons/Search'
import { Avatar, Button, Input } from '@material-ui/core'
import "../css/Nav.css"
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import db, { auth } from '../firebase'
import Modal from 'react-modal'
import Img from './l2.jpeg'
// import firebase from 'firebase'

function Nav() {

    const user = useSelector(selectUser);
    const [openModal, setOpenModal]=useState(false);
    const [input,setinput]=useState("");
    const [addfb,setfb]=useState(false);
    const [inputfb,setinputfb]=useState("");
    const [tag,addtag]=useState("");
    const addQuestion = (e)=>{
        e.preventDefault();
        setOpenModal(false)
        db.collection('question').add({
            question: input,
            // timestamp:firebase.firestore.FieldVaue.serverTimestamp(),
            user: user,
            utag:tag
        })
        setinput('');
    } 
    const addFeedback = (e)=>{
        e.preventDefault();
        setfb(false);
        db.collection('feedback').add({
            feedback: inputfb,
            user:user
        })
        setinput('');
    }
    return (
        <div className="header">
                <div className='logo'>
                    <img src={Img} alt='logo'></img>
                </div>
                <div className='icons'>
                    <div className="search">
                        <Search/>
                        <input type="text" placeholder="Search"></input>
                    </div>
                    <div className="rem">
                        <div className="avatar">
                            <Avatar onClick = {()=> auth.signOut()} src = {user.photo} />
                        </div>
                            <Button onClick={()=> setOpenModal(true)}> Add Question </Button>
                            <Modal
                                isOpen={openModal}
                                onRequestClose={()=> setOpenModal(false)}
                                shouldCloseOnOverlayClick={false}
                                style={{
                                    overlay:{
                                    width: 700,
                                    height: 600,
                                    top:"10%",
                                    left:"30%"
                                    }
                                }}
                            >

                                <div className="mtitle">
                                    <h4>Add Question</h4>
                                    <div className="minfo">
                                        <Avatar
                                        className="avatar"
                                        src={user.photo}
                                        />
                                        <p>{user.displayName ? user.displayName : user.email}</p>
                                    </div>
                                    <div className="modal_input">
                                        <Input
                                        required
                                        value={input}
                                        onChange={(e)=> setinput(e.target.value)}
                                        type="text"
                                        placeholder="Ask your question..."
                                        />
                                        <p>Please select a particular tag related to your question</p>
                                        <div className="tag" onChange={(e)=> addtag(e.target.value)}>
                                            <input type="radio" value="fe" name="tag"/> First Year
                                            <input type="radio" value="cs" name="tag"/> CS                                            
                                            <input type="radio" value="it" name="tag"/> IT
                                            <input type="radio" value="etc" name="tag"/> E&TC
                                            <input type="radio" value="tp" name="tag"/> T&P
                                            <input type="radio" value="clubs" name="tag"/> Clubs
                                            <input type="radio" value="hm" name="tag"/> Hostel&Mess
                                        </div> 
                                    </div>
                                    <div className="modal_button">
                                        <button onClick={()=> setOpenModal(false)}>Close</button>
                                        <button onClick={addQuestion} type="submit" className="add">Ask</button>
                                    </div>
                                </div>
                            </Modal>
                            <Button onClick={()=> setfb(true)}>Feedback </Button>
                            <Modal
                                isOpen={addfb}
                                onRequestClose={()=> setOpenModal(false)}
                                shouldCloseOnOverlayClick={false}
                                style={{
                                    overlay:{
                                    width: 700,
                                    height: 600,
                                    top:"10%",
                                    left:"30%"
                                    }
                                }}
                            >
                                <div className='fb'>
                                <div className="minfo">
                                        <Avatar
                                        className="avatar"
                                        src={user.photo}
                                        />
                                        <p>{user.displayName ? user.displayName : user.email}</p>
                                </div>
                                <div className="modal_input">
                                        <Input
                                        required
                                        value={inputfb}
                                        onChange={(e)=> setinputfb(e.target.value)}
                                        type="text"
                                        placeholder="Add your valuable feedback.."
                                        />
                                        
                                </div>
                                <div className="modal_button">
                                        <button onClick={()=> setfb(false)}>Close</button>
                                        <button onClick={addFeedback} type="submit" className="add">Add</button>
                                </div>
                                </div>

                            </Modal>


                    </div>
                </div>
            </div>
    )
}

export default Nav
