import React from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <img src={imageUrl} alt="Full-screen Image" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;