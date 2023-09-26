import React from 'react'
import Image from './../../../img/UML-paquetages-1.png'
import Image2 from './../../../img/UML-paquetages-2.png'

const PackagingDiagram = () => {
    return (
        <article className="article" id="diagramme-de-paquetages-UML">
            <p className="subtitle">Diagramme de paquetages UML</p>
            <p>Les diagrammes de package (ou diagramme de paquetages) sont des diagrammes structurels utilisés
                pour représenter l'organisation et la disposition de divers éléments modélisés sous forme de
                paquetages. Un paquetage est un regroupement d'éléments UML apparentés, tels que des diagrammes,
                des documents, des classes ou même d'autres paquetages. Tous les éléments du diagramme sont
                imbriqués dans des paquetages, qui sont eux-mêmes représentés sous forme de dossiers de fichiers
                et organisés de manière hiérarchique. Les diagrammes de paquetages sont le plus souvent utilisés
                pour donner un aperçu visuel de l'architecture en couches d'un classifieur UML, tel qu'un
                système logiciel.</p>
            <div class="img-article">
                <img src={Image} alt="exemple de diagramme de paquetages UML" />
            </div>
            <p>Un diagramme de package bien conçu offre de nombreux avantages aux personnes souhaitant créer une
                représentation graphique de leur système ou projet UML.</p>
            <ol>
                <li>Ils fournissent une perspective précise de la structure hiérarchique des différents éléments
                    UML au sein d'un système donné.</li>
                <li>Ces diagrammes permettent de simplifier les diagrammes de classes complexes sous une forme
                    visuelle bien ordonnée.</li>
                <li>Ils offrent une vue d'ensemble précieuse pour les projets et systèmes de grande ampleur.
                </li>
                <li>Les diagrammes de paquetages peuvent être utilisés pour clarifier visuellement de nombreux
                    types de projets et systèmes.</li>
                <li>Ces visuels peuvent être facilement mis à jour au fur et à mesure de l'évolution des
                    systèmes et des projets.</li>
            </ol>
            <p>Les éléments qui composent un diagramme de paquetages sont relativement simples. En effet, ces
                derniers ne comportent que deux symboles :</p>
            <ol>
                <li>Package : Regroupe des éléments apparentés en fonction des données, du comportement ou de
                    l'interaction avec les utilisateurs</li>
                <li>Interdépendance : Décrit la relation entre un élément (paquet, élément nommé, etc.) et un
                    autre</li>
            </ol>
            <p>Ces symboles peuvent être utilisés de plusieurs manières pour représenter différentes itérations
                de paquetages, de dépendances et d'autres éléments au sein d'un système. Voici les composants de
                base que vous trouverez dans un diagramme de package :</p>
            <ol>
                <li>Paquetage : espace de noms utilisé pour regrouper un ensemble d'éléments liés de manière
                    logique au sein d'un système. Tous les éléments contenus dans un paquetage doivent être
                    empaquetables et porter un nom unique.</li>
                <li>Élément empaquetable : élément nommé, appartenant éventuellement de manière directe à un
                    paquetage. Il peut s'agir d'événements, de composants, de cas d'utilisation et même de
                    paquetages. Les éléments empaquetables peuvent également être représentés sous la forme d'un
                    rectangle à l'intérieur d'un paquetage, marqués avec le nom correspondant.</li>
                <li>Dépendances : représentation visuelle de la façon dont un élément (ou un ensemble
                    d'éléments) dépend d'un autre ou l'influence. Les dépendances sont divisées en deux groupes
                    : les dépendances d'accès et les dépendances d'importation. (Voir la section suivante pour
                    plus d'informations).
                </li>
                <li>Element import : relation dirigée entre un espace de noms d'importation et un élément
                    empaquetable importé. Ce symbole est utilisé pour importer des éléments particuliers sans
                    avoir recours à l'importation de paquetages et sans les rendre publics dans l'espace de
                    noms. </li>
                <li>Package import : relation dirigée entre un espace de noms d'importation et un paquetage
                    importé. Ce type de relation dirigée ajoute le nom des membres du paquetage importé à son
                    propre espace de noms.</li>
                <li>Package merge : relation dirigée dans laquelle le contenu d'un paquetage s'ajoute au contenu
                    d'un autre. En d'autres termes, le contenu de deux paquetages fusionne pour former un
                    nouveau paquetage.</li>
            </ol>
            <div class="img-article">
                <img src={Image2} alt="autre exemple de diagramme de paquetages UML" />
            </div>
        </article>

    )
}

export default PackagingDiagram