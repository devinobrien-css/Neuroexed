import React from "react";
import ReactDOM from "react-dom/client";

import './modal.css';


const modal_root = ReactDOM.createRoot(document.getElementById('modal'));

function removeModal(){
    const modal = document.querySelector('.modal')
    modal.animate([{transform:'scale(1)'}, {transform: 'scale(0)'}], {duration: 300});
    setTimeout(() => {  modal_root.render(<></>); }, 280);
    
}

const Modal = (args) =>{
    modal_root.render(
        <>
            <div className="modal-bg" onClick={() => removeModal()}></div>
            <div className="modal">
                {args}
            </div>
        </>
    );
}


export default Modal;