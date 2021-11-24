import React from 'react'
import Card from '../Cards/Card'
import CloseIcon from '@mui/icons-material/Close';

import "./Modal.sass"

const Modal = ({ visible, setVisible, title, children }) => {

    return (
        <>
            {visible &&
                <div className="modal-wrapper" onClick={() => setVisible(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <Card>
                            <div className="modal-header">
                                <p>{title}</p>
                                <CloseIcon sx={{cursor: 'pointer'}} onClick={() => setVisible(false)} />
                            </div>
                            <div className="modal-content">
                                {children}
                            </div>
                        </Card>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal