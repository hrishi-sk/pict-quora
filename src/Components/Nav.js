import React, { useState} from 'react'
import { Avatar, Button, Input } from '@material-ui/core'
import "../css/Nav.css"
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import db, { auth } from '../firebase'
import Modal from 'react-modal'
import Img from './l2.jpeg'

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
                                    <h3>Add Question</h3>
                                    <div className="minfo">
                                        <Avatar
                                        className="avatar"
                                        src={user.photo}
                                        />
                                        <h4>{user.displayName ? user.displayName : user.email}</h4>
                                    </div>
                                    <div className="modal_input">
                                        <Input
                                        required
                                        value={input}
                                        onChange={(e)=> setinput(e.target.value)}
                                        type="text"
                                        placeholder="Ask your question..."
                                        />
                                        
                                        <div className="tag" onChange={(e)=> addtag(e.target.value)}>
                                            <h5>Please select a particular tag related to your question</h5>
                                            <div className='tags'>
                                            <input type="radio" value="fe" name="tag"/> First Year
                                            <input type="radio" value="cs" name="tag"/> CS                                            
                                            <input type="radio" value="it" name="tag"/> IT
                                            <input type="radio" value="etc" name="tag"/> E&TC
                                            <input type="radio" value="tp" name="tag"/> T&P
                                            <input type="radio" value="clubs" name="tag"/> Clubs
                                            <input type="radio" value="hm" name="tag"/> Hostel&Mess
                                            </div>
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
