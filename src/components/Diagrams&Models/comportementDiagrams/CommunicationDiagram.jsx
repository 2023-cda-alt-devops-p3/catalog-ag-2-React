import React,{ useState } from 'react'
import Modal from './../../Modal'
import Image from './../../../img/UML-communication-1.png'
import Image2 from './../../../img/UML-communication-2.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const CommunicationDiagram = () => {

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
        <article className="article" id="diagramme-de-communication-UML">
            <p className="subtitle">Diagramme de communication UML</p>
            <p>En langage UML, un diagramme de communication représente les interactions entre les objets ou les
                rôles associés aux lignes de vie et les messages transmis entre les lignes de vie. Dans les
                versions précédentes d'UML, ce diagramme s'appelait diagramme de collaboration et avait une
                notation différente.</p>
            <p>Les diagrammes de communication sont des diagrammes d'interaction que vous pouvez utiliser pour
                explorer le comportement dynamique d'un système ou d'une application logicielle. Ils offrent une
                autre vue des informations des diagramme de séquence. Dans les diagrammes de séquence, l'accent
                est mis sur l'ordre des messages dans le temps alors que dans les diagrammes de communication
                l'accent est mis sur la structure des messages transmis entre les objets dans l'interaction. Ces
                diagrammes illustrent le flux de messages entre les objets et les relations que cela entraîne
                entre les classes.</p>
            <p>Les diagrammes de communication vous permettent d'explorer le fonctionnement des objets dans un
                système ou une application. Ils peuvent identifier les aspects suivants d'une interaction ou
                d'une tâche :</p>
            <ol>
                <li>Les objets qui participent à l'interaction</li>
                <li>Les interfaces que les classes participantes requièrent</li>
                <li>Les changements de structure requis par une interaction</li>
                <li>Les données transmises entre les objets dans une interaction</li>
            </ol>
            <p>Les diagrammes de communication ressemblent aux diagrammes d'objets dans lesquels une ligne de
                vie représente les objets de l'interaction et les flèches représentent les messages transmis
                entre les lignes de vie. Les pointes de flèches indiquent la direction des messages et les
                numéro de séquence indiquent l'ordre de transmission des messages.</p>
            <p>Les rubriques suivantes décrivent les éléments compris dans les diagrammes de communication :</p>
            <ol>
                <li>Dans les diagrammes UML tels que les diagrammes de séquence ou de communication, les lignes
                    de vie représentent les objets entrant dans une interaction. Dans un scénario d'une banque,
                    par exemple, les lignes de vie peuvent représenter des objets comme le système bancaire ou
                    un client. Chaque instance d'une interaction est représentée par une ligne de vie.</li>
                <li>Dans les diagrammes de communication, le chemin d'un message est un connecteur entre les
                    rôles ou objets représentés par les ligne de vie dans le diagramme. Le chemin identifie les
                    objets qui peuvent transmettre des messages dans l'interaction.</li>
                <li>Un message est un élément de diagramme Unified Modeling Language (UML) qui définit un type
                    particulier de communication entre les instances au cours d'une interaction. Un message fait
                    circuler des informations d'une instance, représentée par une ligne de vie, à une autre
                    instance au cours d'une interaction.</li>
            </ol>
            <div className="img-article">
                <LazyLoadImage src={Image}
                    alt="exemple de diagramme de communication UML" onClick={() => openModal(Image)} />
            </div>
            <p>exemple du passage d'un diagramme de séquence à un diagramme de communication</p>
            <div className="img-article">
                <LazyLoadImage src={Image2}
                    alt="exemple du passage d'un diagramme de séquence à un diagramme de communication UML" onClick={() => openModal(Image2)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>

    )
}

export default CommunicationDiagram