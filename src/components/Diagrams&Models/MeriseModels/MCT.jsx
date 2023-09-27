import React from 'react'
import Image from './../../../img/MERISE_MCT-1.png'
import Image2 from './../../../img/MERISE_MCT-2.png'
import Image3 from './../../../img/MERISE_MCT-3.png'
import Image4 from './../../../img/MERISE_MCT-4.png'

const MCT = () => {
  return (
    <article className="article" id="modele-conceptuel-des-traitements-MERISE">
      <p className="subtitle">Modèle Conceptuel des Traitements MERISE</p>
      <p>Le diagramme ci-après est un MCT "classique" qui présente les deux opérations (les deux "temps"
        métiers) qui constituent le processus "Gestion des sinistres".</p>
      <div className="img-article">
        <img src={Image} alt="exemple de modèle conceptuel de traitements" />
      </div>
      <p>Ce diagramme est un MCT analytique qui décompose en opérations élémentaires, l'opération
        initiale Ouverture du dossier.</p>
      <div className="img-article">
        <img src={Image2} alt="autre exemple de modèle conceptuel de traitements" />
      </div>
      <p>Exemple de MCT pour la validation d'un dossier d'inscription.</p>
      <div className="img-article">
        <img src={Image3} alt="autre exemple de modèle conceptuel de traitements" />
      </div>
      <p>Exemple de MCT pour la réservation d'un appartement.</p>
      <div className="img-article">
        <img src={Image4} alt="autre exemple de modèle conceptuel de traitements" />
      </div>
    </article>
  )
}

export default MCT