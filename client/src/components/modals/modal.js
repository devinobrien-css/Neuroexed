import React from "react";

import './modal.css';






const modal = (args) =>{
    return (
        <>

            <div className="modal-bg" onClick={args.remove_function}></div>
            <div className="modal">
                {args.content}
            </div>
        </>
        )
}


export default modal;