import React, { useContext } from 'react'
import PasswordContext from '../../Context/PasswordContext'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RecentPasswords() {
    const { recentPasswords, copyRecentPassword, showRecentModal, setShowRecentModal } = useContext(PasswordContext)

    if (!showRecentModal) {
        return null
    }

    return (
        <div className="recent-modal" role="dialog" aria-modal="true" aria-labelledby="recent-passwords-title">
            <button
                type="button"
                className="recent-backdrop"
                onClick={() => setShowRecentModal(false)}
                aria-label="Close recent passwords"
            />
            <div className="recent-passwords">
                <div className="recent-header">
                    <div>
                        <h3 id="recent-passwords-title">Recent passwords</h3>
                        <p>Session only</p>
                    </div>
                    <button
                        type="button"
                        className="recent-close"
                        onClick={() => setShowRecentModal(false)}
                        aria-label="Close recent passwords"
                    >
                        x
                    </button>
                </div>
                {recentPasswords.length === 0 ? (
                    <div className="recent-empty">No passwords generated yet.</div>
                ) : (
                    <div className="recent-list">
                        {recentPasswords.map((recentPassword) => (
                            <button
                                type="button"
                                className="recent-item"
                                key={recentPassword}
                                onClick={() => copyRecentPassword(recentPassword)}
                                title="Copy password"
                            >
                                <span>{recentPassword}</span>
                                <FontAwesomeIcon icon={faCopy} className="recent-icon" />
                            </button>
                        ))}
                    </div>
                )}
                <span className="recent-count">{recentPasswords.length}/5</span>
            </div>
        </div>
    )
}

export default RecentPasswords
