import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import CartModal from '../Pages/CartModal';


const Backdrop = props => {
    return <div className="backdrop"></div>
};


const ModalOverlay = props => {
    return <div className="modal">{props.childr}</div>
}

const portalElement = document.getElementById('overlays')

function CartOverlay() {
    return (
        <div>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<CartModal />, portalElement)}

        </div>
    )
}

export default CartOverlay