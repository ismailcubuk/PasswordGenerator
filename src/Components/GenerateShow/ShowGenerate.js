import React, { useContext } from 'react'
import PasswordContext from '../../Context/PasswordContext'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'bootstrap/dist/css/bootstrap.min.css';
function ShowGenerate() {
    const { password, copyClick, recentPasswords, setShowRecentModal } = useContext(PasswordContext)
    const hasPassword = password !== ""
    const hasRecentPasswords = recentPasswords.length > 0

    return (
        <div className="generate-password">
            <h2>{password}</h2>
            <div className="password-actions">
                <button
                    type="button"
                    className="copy-button"
                    disabled={!hasRecentPasswords}
                    onClick={() => setShowRecentModal(true)}
                    aria-label="Open recent passwords"
                    title="Recent passwords"
                >
                    <FontAwesomeIcon icon={faClockRotateLeft} className='copy-icon' />
                </button>
                <button
                    type="button"
                    className="copy-button"
                    disabled={!hasPassword}
                    onClick={copyClick}
                    aria-label="Copy password"
                    title="Copy password"
                >
                    <FontAwesomeIcon icon={faCopy} className='copy-icon' />
                </button>
            </div>
        </div>
    )
}

export default ShowGenerate
