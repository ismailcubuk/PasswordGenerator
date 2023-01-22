import React, { useContext } from 'react'
import PasswordContext from '../../Context/PasswordContext'
import Toast from 'react-bootstrap/Toast';
function Alert() {
    const { showToast, setShowToast, password } = useContext(PasswordContext)
    return (
        <div className='toast-div'>
            <Toast show={showToast} onClose={() => setShowToast(false)} autohide delay={1000} position={'bottom-end'} className="toast" bg={"success"}>
                <Toast.Header className='toast-header' closeButton={false}>
                    <strong className="me-auto">Copy Password</strong>
                </Toast.Header>
                <Toast.Body className='toast-body'> {password} </Toast.Body>
            </Toast>
        </div>
    )
}

export default Alert