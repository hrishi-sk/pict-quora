import { Avatar } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import '../css/Question.css'
// import { selectUser } from '../features/userSlice'
import Modal from 'react-modal';
import "../css/Nav.css"
import { selectQueID, setQue } from '../features/queSlice';
import { selectUser } from '../features/userSlice';
import db from '../firebase'

Modal.setAppElement("#root");
function Question( {Id, question, quser} ) {
    const user=useSelector(selectUser)
    const[openModal, setOpenModal]=useState (false);
    const dispatch = useDispatch()
    const queID = useSelector(selectQueID)
    const [answer,setAnswer]=useState("")
    const [getAns,setGetAns]=useState([])

    useEffect(() => {
       if(queID){
           db.collection('question').doc(queID).collection
           ('answer').onSnapshot(snapshot => setGetAns(snapshot.docs.map((doc)=>(
            {   
                id: doc.id,
                answers:doc.data()
           }))))
       }
    })
    const hadleAns=(e)=>{
        e.preventDefault()
        if(queID){
            db.collection('question').doc(queID).collection('answer').add({
                queID:queID,
                answer:answer,
                user:user
            })
            setAnswer("")
            setOpenModal(false)
        }
    }
    // const user = useSelector(selectUser);
    return (
        <div className="question"
         onClick={()=>dispatch(setQue({
             queID : Id,
             queName: question
         }))}
        >
        <div className="question">
            <div className="title">
                <Avatar
                    src={quser.photo}
                />
                <h5>{quser.displayName ? quser.displayName : quser.email}</h5>
                <small>time</small>
            </div>
            <div className="body">
                <div className="que">
                    <p>{question}</p>
                    <button onClick={()=>setOpenModal(true)} className="answer">Answer</button>
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
                                <div className="mque">
                                    <h4>{question}</h4>
                                    <p>asked by {quser.displayName ? quser.displayName:quser.email}</p>
                                </div>
                                <div className="mans">
                                    <textarea required value={answer} onChange={(e)=> setAnswer(e.target.value)} placeholder="Enter Answer" type="text"/>
                                </div>
                                <div className="mbutton">
                                    <button classname="close" onClick={()=>setOpenModal(false)}>Close</button>
                                    <button onClick={hadleAns} type="submit" className="add">Add Answer</button>
                                </div>
                            </Modal>
                </div>
                <div className="modal__answer">
                    {
                        getAns.map(({id,answers})=>(
                            <p
                            key ={id}
                            style={{
                            paddingBottom: "5px"}}>
                            { Id === answers.queID ? (
                                <p>
                                {answers.user.displayName ? answers.user.displayName: answers.user.email}{"    :  "}
                                {answers.answer}
                                </p>
                                ):("")
                            }
                            </p>  
                        ))
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

export default Question
