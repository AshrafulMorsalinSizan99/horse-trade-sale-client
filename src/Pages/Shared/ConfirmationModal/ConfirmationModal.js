import React from 'react';

const ConfirmationModal = ({ title, closeModal, modalData, successAction }) => {
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>

                    <div className="modal-action">
                        <label onClick={successAction(modalData)} htmlFor="confirmation-modal" className="btn">Yay!</label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;