import React from 'react'
import Image from './../../../img/UML-deploiement-1.png'
import Image2 from './../../../img/UML-deploiement-2.png'
import Image3 from './../../../img/UML-deploiement-3.png'
import Image4 from './../../../img/UML-deploiement-4.png'

const DeploymentDiagram = () => {
    return (
        <article className="article" id="diagramme-de-deploiement-UML">
            <p className="subtitle">Diagramme de deploiement UML</p>
            <p>Dans le contexte du langage de modélisation unifié (UML), un diagramme de déploiement fait partie
                de la catégorie des diagrammes structurels, car il décrit un aspect du système même. Dans le cas
                présent, le diagramme de déploiement décrit le déploiement physique des informations générées
                par le logiciel sur des composants matériels. On appelle artefact l'information qui est générée
                par le logiciel. Attention, ne confondez cette utilisation du terme avec celle qui existe dans
                d'autres approches de modélisation comme le BPMN.</p>
            <p>Les diagrammes de déploiement sont constitués de plusieurs formes UML. Les boîtes en trois
                dimensions, appelées nœuds, représentent les composants du système, qu'ils soient logiciels ou
                matériels. Les lignes entre les nœuds indiquent les relations et les petites formes à
                l'intérieur des boîtes représentent les artefacts logiciels qui sont déployés</p>
            <p>Les diagrammes de déploiement sont utiles dans plusieurs domaines. Vous pouvez les utiliser pour
                :</p>
            <ol>
                <li>Montrer quels éléments logiciels sont déployés par quels éléments matériels.</li>
                <li>Illustrer le traitement d'exécution du point de vue matériel</li>
                <li>Visualiser la topologie du système matériel</li>
            </ol>
            <p>Les diagrammes de déploiement sont composés de nombreuses formes. La liste suivante offre un
                aperçu des principaux éléments que vous pourriez rencontrer. Vous pouvez apercevoir la plupart
                d'entre eux dans l'image ci-dessous.</p>
            <ol>
                <li>Artefact : produit développé par le logiciel, symbolisé par un rectangle avec le nom et le
                    mot « artefact » entourés de flèches doubles.</li>
                <li>Association : ligne indiquant un message ou tout autre type de communication entre deux
                    nœuds.</li>
                <li>Composant : rectangle avec deux onglets indiquant un élément logiciel.</li>
                <li>Dépendance : ligne en pointillés terminée par une flèche, qui indique qu'un nœud ou
                    composant est dépendant d'un autre.</li>
                <li>Interface : cercle qui indique une relation contractuelle. Les objets qui réalisent
                    l'interface doivent remplir une sorte d'obligation.</li>
                <li>Nœud : élément matériel ou logiciel représenté par une boîte en relief.</li>
                <li>Nœud conteneur : nœud qui en contient un autre, comme dans l'exemple ci-dessous où les nœuds
                    contiennent des composants.</li>
                <li>Stéréotype : dispositif contenu dans le nœud, présenté dans la partie supérieure du nœud et
                    dont le nom est entouré de flèches doubles.</li>
            </ol>
            <div className="img-article">
                <img src={Image} alt="exemple de diagramme de deploiement UML" />
            </div>
            <div className="img-article">
                <img src={Image2} alt="autre exemple de diagramme de deploiement UML" />
            </div>
            <div className="img-article">
                <img src={Image3} alt="autre exemple de diagramme de deploiement UML" />
            </div>
            <div className="img-article">
                <img src={Image4} alt="autre exemple de diagramme de deploiement UML" />
            </div>
        </article>
    )
}

export default DeploymentDiagram