import React, { useState } from 'react'
import Modal from './../../Modal'
import Image from './../../../img/UML-temps-1.png'
import Image2 from './../../../img/UML-temps-2.png'
import Image3 from './../../../img/UML-temps-3.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const TimeDiagram = () => {

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
        <article className="article" id="diagramme-de-temps-UML">
            <h2 className="subtitle">Diagramme de Temps UML</h2>
            <p>UML Diagrammes de Temps sont utilisés pour <b>afficher le changement de state ou de la valeur d'un
                ou plusieurs éléments au fil du temps</b>. Il peut également <b>montrer l'interaction entre les
                événements prévus et le temps et les contraintes de durée, qui les dirigent</b>.</p>
            <p>Un State de Ligne de Vie montre le changement du state d'un article au fil du temps. Les
                affichages d'Axe des abscisses le temps écoulé dans n'importe quelles unités est choisi, tandis
                que l'Axe des ordonnées est étiqueté d'une liste donnée du states.</p>
            <div className="img-article">
                <LazyLoadImage src={Image} alt="exemple de diagramme de temps UML" onClick={() => openModal(Image)} />
            </div>
            <p>Un Ligne de Vie de Valeur montre le changement de valeur d'un article au fil du temps. Les
                affichages d'Axe des abscisses le temps écoulé dans n'importe quelles unités sont choisis, le
                même quant à le State de Ligne de Vie. On montre la valeur entre la paire des lignes
                horizontales qui traversent à chaque changement de la valeur.</p>
            <div className="img-article">
                <LazyLoadImage src={Image2} alt="autre exemple de diagramme de temps UML" onClick={() => openModal(Image2)} />
            </div>
            <p>State and value State et Lignes de Vie peuvent être empilés les uns sur les autres dans une
                combinaison quelconque. Ils doivent avoir le même axe-X. Les messages peuvent être transmis
                d'une Ligne de Vie à l'autre. Chaque transition du state ou de la valeur peut avoir un événement
                défini, une contrainte de temps qui indique quand un événement doit se produire, et une
                contrainte de durée qui indique combien de temps un state ou la valeur doit être en vigueur
                pour. Une fois celles-ci ont toutes été appliquées, un diagramme de temps peut ressembler le
                suivant.</p>
            <div className="img-article">
                <LazyLoadImage src={Image3} alt="autre exemple de diagramme de temps UML" onClick={() => openModal(Image3)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>

    )
}

export default TimeDiagram