import React from 'react'
import Image from './../../../img/UML-Composite-1.png'
import Image2 from './../../../img/UML-Composite-2.png'

const CompositeStructureDiagram = () => {
    return (
        <article className="article" id="diagramme-de-structures-composites-UML">
            <p className="subtitle">Diagramme de structures composites UML</p>
            <p>Un diagramme de structure composite est un diagramme structurel UML qui fournit une vue
                d'ensemble logique de l'ensemble ou d'une partie d'un système logiciel. Il permet de visualiser
                un classifieur structuré donné, en définissant ses classes de configuration, ses interfaces, ses
                packages et les liens qui les unissent dans le détail.</p>
            <div className="img-article">
                <img src={Image} alt="exemple de diagramme de structures composites UML" />
            </div>
            <p>Un diagramme de structure composite permet aux utilisateurs de déterminer précisément ce qui est
                contenu dans un objet, en spécifiant la manière dont différentes propriétés interagissent pour
                produire un certain comportement. Les différentes relations au sein d'un système logiciel
                complexe peuvent être difficiles à appréhender, mais la décomposition des fonctionnalités peut
                fournir des informations précieuses sur la manière dont les structures sont interconnectées,
                dont les informations sont communiquées, etc.</p>
            <p>Un diagramme de structure composite offre également les avantages suivants :</p>
            <p>Bien que les diagrammes des composants puissent paraître complexes à première vue, ils sont d'une
                valeur inestimable pour la conception de votre système. Ils peuvent en effet aider votre équipe
                à :</p>
            <ol>
                <li>Il aide les utilisateurs à comprendre l'état actuel de leur système.</li>
                <li>Il décompose la structure interne de plusieurs classes, interfaces ou composants, et leurs
                    interactions.</li>
                <li>Il détaille les architectures d'exécution et les modèles d'utilisation que les diagrammes
                    statiques ne peuvent pas représenter.</li>
                <li>Il fournit aux utilisateurs des informations pour optimiser et dépanner leur système.
                </li>
            </ol>
            <p>Composants de base des diagrammes de structures composites UML</p>
            <ol>
                <li>Terminator : Indique les points de départ et de fin</li>
                <li>Nœud (circulaire) : Indique les événements ou les jalons et contient des chiffres</li>
                <li>Nœud (rectangulaire) : Indique les événements ou les jalons et contient des chiffres</li>
                <li>Acteur : Interagit avec le système depuis l'extérieur (p. ex. une personne, un équipement,
                    etc.)</li>
                <li>Classe : Regroupe les objets ayant des propriétés ou des comportements communs (p. ex. des
                    opérations, des paramètres, des attributs, etc.)</li>
                <li>Partie : Agit comme une instance d'exécution des classes ou des interfaces</li>
                <li>Port : Définit le comportement que l'exécutant accepte de respecter</li>
                <li>Raccord : Représente les liens de communication entre les parties</li>
            </ol>
            <p>En tant que diagrammes UML, les diagrammes de structure composite et les diagrammes de classes
                sont utilisés pour visualiser et organiser les acteurs, les interactions et les artefacts au
                sein d'un système. Mais si les diagrammes de structure composite et les diagrammes de classes
                ont des significations similaires, ils diffèrent au final dans la façon dont ils représentent
                ces informations. Pour faire simple, les diagrammes de structure composite sont plus spécifiques
                et moins ambigus que les diagrammes de classes.</p>
            <p>Un diagramme de structure composite permet aux utilisateurs de modéliser plus clairement les
                implémentations de l'activité d'un artefact dans un environnement d'exécution. Ils sont
                également plus efficaces pour illustrer la décomposition en contexte, en décrivant la structure
                interne de plusieurs classes et les liens qui existent entre elles. En résumé, si vous souhaitez
                transmettre des informations concrètes et explicites sur les comportements et les associations
                au sein de votre système, optez pour un diagramme de structure composite.
            </p>
            <div className="img-article">
                <img src={Image2}
                    alt="autre exemple de diagramme de structures composites UML" />
            </div>
        </article>
    )
}

export default CompositeStructureDiagram