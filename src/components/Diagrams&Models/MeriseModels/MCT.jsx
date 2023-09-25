import React from 'react'
import Image from './../../../img/MERISE_MCT-1.png'
import Image2 from './../../../img/MERISE_MCT-2.png'

const MCT = () => {
  return (
    <article className="article" id="modele-conceptuel-des-traitements-MERISE">
      <p className="subtitle">Modèle Conceptuel des Traitements MERISE</p>
      <p>Le diagramme ci-après est un MCT "classique" qui présente les deux opérations (les deux "temps"
        métiers) qui constituent le processus "Gestion des sinistres". Il existe des "règles" pour
        construire les opérations d'un MCT.</p>
      <div className="img-article">
        <img src={Image} alt="exemple de modèle conceptuel de traitements" />
      </div>
      <p>Ce dernier diagramme est un MCT analytique qui décompose en opérations élémentaires, l'opération
        initiale Ouverture du dossier.</p>
      <div className="img-article">
        <img src={Image2} alt="autre exemple de modèle conceptuel de traitements" />
      </div>
    </article>
  )
}

export default MCT