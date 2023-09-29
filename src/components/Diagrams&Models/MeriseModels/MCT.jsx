import React, { useState} from 'react'
import Image from './../../../img/MERISE_MCT-1.png'
import Image2 from './../../../img/MERISE_MCT-2.png'
import Image3 from './../../../img/MERISE_MCT-3.png'
import Image4 from './../../../img/MERISE_MCT-4.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from './../../Modal'

const MCT = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
      setSelectedImage(imageUrl);
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setSelectedImage('');
      setIsModalOpen(false);
  };

  return (
    <article className="article" id="modele-conceptuel-des-traitements-MERISE">
      <p className="subtitle">Modèle Conceptuel des Traitements MERISE</p>
      <p>Le diagramme ci-après est un MCT "classique" qui présente les deux opérations (les deux "temps"
        métiers) qui constituent le processus "Gestion des sinistres".</p>
      <div className="img-article">
        <LazyLoadImage src={Image} alt="exemple de modèle conceptuel de traitements" onClick={() => openModal(Image)} />
      </div>
      <p>Ce diagramme est un MCT analytique qui décompose en opérations élémentaires, l'opération
        initiale Ouverture du dossier.</p>
      <div className="img-article">
        <LazyLoadImage src={Image2} alt="autre exemple de modèle conceptuel de traitements" onClick={() => openModal(Image2)} />
      </div>
      <p>Exemple de MCT pour la validation d'un dossier d'inscription.</p>
      <div className="img-article">
        <LazyLoadImage src={Image3} alt="autre exemple de modèle conceptuel de traitements" onClick={() => openModal(Image3)} />
      </div>
      <p>Exemple de MCT pour la réservation d'un appartement.</p>
      <div className="img-article">
        <LazyLoadImage src={Image4} alt="autre exemple de modèle conceptuel de traitements" onClick={() => openModal(Image4)} />
      </div>
      {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </article>
  )
}

export default MCT