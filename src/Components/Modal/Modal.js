import React, {useState} from 'react'
import './Modal.scss'
const Modal = () => {
let [show, setShow] = useState(false)
const showModal = ()=>{
    setShow(true);
}
const hideModal = ()=>{
    setShow(false);
}
        return(
            <div className="modal-container">
               <h1>
                   Thank you!
                </h1> 
                <p>I'll be in touch soon</p>
                <button onClick={()=>hideModal}>Close</button>
            </div>
        )   
}

export default Modal;