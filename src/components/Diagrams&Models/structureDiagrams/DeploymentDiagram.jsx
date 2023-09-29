import React, { useState } from 'react'
import Modal from './../../Modal'
import Image from './../../../img/UML-deploiement-1.png'
import Image2 from './../../../img/UML-deploiement-2.png'
import Image3 from './../../../img/UML-deploiement-3.png'
import Image4 from './../../../img/UML-deploiement-4.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const DeploymentDiagram = () => {

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
        <article className="article" id="diagramme-de-deploiement-UML">
            <p className="subtitle">Diagramme de deploiement UML</p>
            <p>Dans UML, les diagrammes de déploiement <b>modélisent l'architecture physique d'un système</b>. Les diagrammes de déploiement affichent les relations entre les composants logiciels et matériels du système, d'une part, et la distribution physique du traitement, d'autre part. Les diagrammes de déploiement, que vous préparez généralement pendant la phase d'implémentation du développement, présentent la disposition physique des noeuds dans un système réparti, les artefacts qui sont stockés sur chaque noeud et les composants et autres éléments que les artefacts implémentent. Les noeuds représentent des périphériques matériels tels que des ordinateurs, des détecteurs et des imprimantes, ainsi que d'autres périphériques qui prennent en charge l'environnement d'exécution d'un système. Les chemins de communication et les relations de déploiement modélisent les connexions dans le système.</p>
            <p>Les diagrammes de déploiement sont utiles dans plusieurs domaines. Vous pouvez les utiliser pour
                :</p>
            <ol>
                <li>- Montrer quels éléments logiciels sont déployés par quels éléments matériels.</li>
                <li>- Illustrer le traitement d'exécution du point de vue matériel</li>
                <li>- Visualiser la topologie du système matériel</li>
            </ol>
            <p>Les diagrammes de déploiement sont composés de nombreuses formes. La liste suivante offre un
                aperçu des principaux éléments que vous pourriez rencontrer :</p>
            <ol>
                <li>- <i>Artefact</i> : produit développé par le logiciel, symbolisé par un rectangle avec le nom et le
                    mot « artefact » entourés de flèches doubles.</li>
                <li>- <i>Association</i> : ligne indiquant un message ou tout autre type de communication entre deux
                    nœuds.</li>
                <li>- <i>Composant</i> : rectangle avec deux onglets indiquant un élément logiciel.</li>
                <li>- <i>Dépendance</i> : ligne en pointillés terminée par une flèche, qui indique qu'un nœud ou
                    composant est dépendant d'un autre.</li>
                <li>- <i>Interface</i> : cercle qui indique une relation contractuelle. Les objets qui réalisent
                    l'interface doivent remplir une sorte d'obligation.</li>
                <li>- <i>Nœud</i> : élément matériel ou logiciel représenté par une boîte en relief.</li>
                <li>- <i>Nœud conteneur</i> : nœud qui en contient un autre, comme dans l'exemple ci-dessous où les nœuds
                    contiennent des composants.</li>
                <li>- <i>Stéréotype</i> : dispositif contenu dans le nœud, présenté dans la partie supérieure du nœud et
                    dont le nom est entouré de flèches doubles.</li>
            </ol>
            <p>Voici quelques exemples de diagrammes de déploiements :</p>
            <div className="img-article">
                <LazyLoadImage src={Image} alt="exemple de diagramme de deploiement UML" onClick={() => openModal(Image)} />
            </div>
            <div className="img-article">
                <LazyLoadImage src={Image2} alt="autre exemple de diagramme de deploiement UML" onClick={() => openModal(Image2)} />
            </div>
            <div className="img-article">
                <LazyLoadImage src={Image3} alt="autre exemple de diagramme de deploiement UML" onClick={() => openModal(Image3)} />
            </div>
            <div className="img-article">
                <LazyLoadImage src={Image4} alt="autre exemple de diagramme de deploiement UML" onClick={() => openModal(Image4)} />
            </div>
            {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </article>
    )
}

export default DeploymentDiagram