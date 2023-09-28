import React, { useState } from 'react'
import Modal from './../../Modal'
import Image from './../../../img/UML-objets-1.png'
import Image2 from './../../../img/UML-objets-2.png'
import Image3 from './../../../img/UML-objets-3.png'
import Image4 from './../../../img/UML-objets-4.png'


const ObjectDiagram = () => {

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
        <article className="article" id="diagramme-d-objets-UML">
            <p className="subtitle">Diagramme d'objets UML</p>
            <p>Un diagramme d'objets UML représente une instance spécifique d'un diagramme de classes à un
                moment précis. Dans sa représentation visuelle, il est très similaire à un diagramme de classes.
            </p>
            <p>Les diagrammes d'objets sont simples à créer : ils sont composés d'objets, représentés par des
                rectangles et reliés par des lignes. Voici les principaux éléments d'un diagramme d'objets.</p>
            <p>Le langage UML a été créé sous forme de modèle standardisé pour décrire une approche de la
                programmation orientée objet. Comme les classes sont les composantes des objets, les diagrammes
                de classes sont les composantes de l'UML. Les divers éléments d'un diagramme de classes peuvent
                représenter les classes qui seront effectivement programmées, les principaux objets ou les
                interactions entre classes et objets. </p>
            <ol>
                <li>Objets Les objets désignent les instances d'une classe. Par exemple, si « voiture » est une
                    classe, « Nissan Altima 2007 » est un objet de cette classe.</li>
                <li>Titres de classe Les titres de classes sont les attributs spécifiques d'une classe donnée.
                    Dans le diagramme
                    d'objets arbre généalogique, ce sont le nom, le sexe et l'âge des membres de la famille. Ils
                    peuvent apparaître en tant qu'éléments sur l'objet, voire dans les propriétés de l'objet
                    même (par exemple la couleur).</li>
                <li>Attributs de classe Les attributs de classe sont représentés par un rectangle avec deux
                    onglets qui indique un élément de logiciel.</li>
                <li>Liens Les liens correspondent aux lignes qui relient deux formes d'un diagramme d'objets.
                </li>
            </ol>
            <div className="img-article">
                <img src={Image} alt="exemple de diagramme d'objets UML" onClick={() => openModal(Image)} />
            </div>
            <div className="img-article">
                <img src={Image2} alt="autre exemple de diagramme d'objets UML" onClick={() => openModal(Image2)} />
            </div>
            <div className="img-article">
                <img src={Image3} alt="autre exemple de diagramme d'objets UML" onClick={() => openModal(Image3)} />
            </div>
            <div className="img-article">
                <img src={Image4} alt="autre exemple de diagramme d'objets UML" onClick={() => openModal(Image4)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>
    )
}

export default ObjectDiagram