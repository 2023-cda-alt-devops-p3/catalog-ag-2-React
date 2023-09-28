import React, { useState } from 'react'
import Modal from './../../Modal'
import Image from './../../../img/UML-profil-1.png'
import Image2 from './../../../img/UML-profil-2.png'

const ProfilDiagram = () => {

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
        <article className="article" id="diagramme-de-profil-UML">
            <p className="subtitle">Diagramme de profil UML</p>
            <p>Récemment ajoutés à UML 2.0, les diagrammes de profil sont uniques et rarement utilisés dans les
                spécifications. Un diagramme de profil est mieux compris comme un mécanisme d'extensibilité pour
                personnaliser les modèles UML pour des domaines et des plates-formes spécifiques.</p>
            <p>Le <b>diagramme de profil</b>, une sorte de diagramme structurel dans le langage de modélisation unifié (UML), fournit un mécanisme d'extension générique pour personnaliser les modèles UML pour des domaines et des plates-formes particuliers. Les mécanismes d'extension permettent d'affiner la sémantique standard de manière strictement additive, en évitant qu'elle ne contredise la sémantique standard. Les profils sont définis à l'aide de stéréotypes, de définitions de valeurs balisées et de contraintes appliquées à des éléments de modèle spécifiques, tels que les classes, les attributs, les opérations et les activités.</p>
            <ol>
                <li>Les <b>stéréotypes</b> permettent d'enrichir le vocabulaire UML. Vous pouvez ajouter ou créer de nouveaux éléments de modèle, dérivés d'éléments existants mais possédant des propriétés spécifiques adaptées à votre domaine problématique. Les stéréotypes sont utilisés pour introduire de nouveaux éléments de base qui parlent le langage de votre domaine et semblent primitifs. Il permet d'introduire de nouveaux symboles graphiques.</li>
                <li>Les <b>valeurs balisées</b> sont utilisées pour étendre les propriétés d'UML afin que vous puissiez ajouter des informations supplémentaires dans la spécification d'un élément de modèle. Il vous permet de spécifier des paires de valeurs-clés d'un modèle où les mots-clés sont les attributs. Les valeurs marquées sont affichées graphiquement sous forme de chaîne entre parenthèses. Par exemple : considérons une équipe de publication responsable de l'assemblage, des tests et du déploiement d'un système. Dans ce cas, il est nécessaire de garder une trace de la version et des résultats des tests du sous-système principal. Les valeurs balisées sont utilisées pour ajouter de telles informations.</li>
                <li>Ce sont les <b>propriétés</b> permettant de spécifier une sémantique ou des conditions qui doivent rester vraies à tout moment. Il vous permet d'étendre la sémantique du bloc de construction UML en ajoutant de nouveaux protocoles. Graphiquement, une contrainte est rendue sous forme de chaîne entourée de parenthèses placées à proximité de l'élément associé. Par exemple : Lors du développement d'un système temps réel, il est nécessaire d'agrémenter le modèle de certaines informations nécessaires telles que le temps de réponse. Une contrainte définit une relation entre les éléments du modèle qui doit être utilisée subset ou xor. Les contraintes peuvent porter sur des attributs, des attributs dérivés et des associations. Il peut également être attaché à un ou plusieurs éléments du modèle affichés sous forme de note.</li>
            </ol>
            <div className="img-article">
                <img src={Image} alt="autre exemple de diagramme de paquetages UML" onClick={() => openModal(Image)} />
            </div>
            <div className="img-article">
                <img src={Image2} alt="autre exemple de diagramme de paquetages UML" onClick={() => openModal(Image2)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>
    )
}

export default ProfilDiagram