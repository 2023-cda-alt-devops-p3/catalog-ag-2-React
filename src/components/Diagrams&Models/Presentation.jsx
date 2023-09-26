import React from 'react'
import Image from './../../img/UML-presentation-1.png'

const Presentation = () => {
  return (
    <article className="article" id="presentation-UML">
      <p className="subtitle">Presentation de l'UML et des modèles MERISE</p>
      <p>Le <b>langage de modélisation unifié UML</b> a été développé pour établir un langage de modélisation visuel commun pour <i>l'architecture, la conception et la mise en œuvre</i> de la structure et du comportement des grands systèmes logiciels. UML a des applications en dehors du développement logiciel, comme les processus industriels.</p>
      <p>Il se compose de nombreux types de diagrammes et est similaire aux plans utilisés dans d'autres domaines. Les diagrammes UML, en général, décrivent les limites, la structure et le comportement d'un système, ainsi que les objets qu'il contient.</p>
      <p>La conception et l'analyse orientées objet sont liées à UML. Pour créer des diagrammes, UML prend des éléments et crée des associations entre eux. Voici quelques exemples de diagrammes UML.</p>
      <ol>
        <li>Un <b>diagramme structurel</b> décrit les <i>caractéristiques statiques ou la structure d'un système</i>. Des schémas de structure sont présentés. Les diagrammes de composants, les diagrammes d'objets, les diagrammes de classes et les diagrammes de déploiement sont tous des exemples de diagrammes utilisés dans le développement de logiciels.</li>
        <li>Un <b>diagramme de comportement</b> décrit les <i>caractéristiques dynamiques ou le comportement d'un système</i>. Des diagrammes de comportement sont inclus. Utilisez des diagrammes de cas, des diagrammes d'état, des diagrammes d'activité et des diagrammes d'interaction pour vous aider à visualiser vos idées.</li>
      </ol>
      <p>Voici quelques-uns des composants les plus courants d'un diagramme d'activités :</p>
      <div className="img-article">
        <img src={Image} alt="exemple avec les types de diagrammes UML" />
      </div>
      <p>La <b>méthode Merise</b> propose une approche de la conception séparant l'étude des données de celle des traitements, en avançant progressivement par niveaux.</p>
      <p>Chacun de ces niveaux a pour objectif principal de fournir un certain nombre de documents (MCD, MPD, MCT, ...) permettant ainsi la synthèse textuelle d'un processus de réflexion.</p>
      <p>La méthode Merise propose trois niveaux de représentation d'un système
        d'information :</p>
      <ol>
        <li><b>Le niveau conceptuel</b> : Le niveau conceptuel représente les informations et leurs relations d'une part, les utilisations qui en sont faites et les contraintes d'autre part. Ces définitions sont établies en faisant abstraction de toute contrainte liée à l'organisation. En terme de données, cette description fait appel au formalisme Entité-Association et se traduit par des entités de base et par des relations avec ces entités. En terme de traitements, ces mêmes entités vont être décrites par leurs sollicitations ou par les réactions qu'elles déclenchent de la part du système d'information, donc par les traitements dont elles sont les causes et les conséquences. Ceci se fait à l’aide d'événements, de synchronisation et d'opérations.</li>
        <li><b>Le niveau organisationnel ou logique</b> : Alors qu'au niveau conceptuel est exprimé la réalité perçue par l'entreprise dans son ensemble, le niveau organisationnel exprime cette même réalité telle qu'elle est vécue par les acteurs quels qu'ils soient. A ce niveau, aucune différence n'est faite entre les hommes et les machines. On intègre à l'analyse les critères liés à l'organisation. En terme de données, les entités et relations suscitent la création de tableaux. La vue logique est nécessairement orientée vers une classe de solutions. En terme de traitements, les événements décrits ne sont pas des événements temporels mais des événements à dominante spatiale.</li>
        <li><b>Le niveau opérationnel ou physique</b> : C'est une représentation des moyens qui vont effectivement être mis en œuvre pour gérer les données ou activer les traitements. Le niveau physique apporte des solutions techniques. En ce qui concerne les données, il y a passage d'une classe de solutions à un produit de cette classe. Concrètement, cela se traduira par l'utilisation d'un SGBD. On effectue des choix sur les méthodes de stockage et d'accès. En terme de traitements, le modèle opérationnel décrira l'architecture des programmes qui vont activer les différents tâches de l'ordinateur. En aucun cas à ce niveau, il n'y a de programmation effective.</li>
      </ol>
    </article>
  )
}

export default Presentation