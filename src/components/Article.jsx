import React from 'react'

//Structure Diagrams
import ClassDiagram from './Diagrams&Models/structureDiagrams/ClassDiagram'
import ObjectDiagram from './Diagrams&Models/structureDiagrams/ObjectDiagram'
import ComponantDiagram from './Diagrams&Models/structureDiagrams/ComponantDiagram'
import CompositeStructureDiagram from './Diagrams&Models/structureDiagrams/CompositeStructureDiagram'
import DeploymentDiagram from './Diagrams&Models/structureDiagrams/DeploymentDiagram'
import PackagingDiagram from './Diagrams&Models/structureDiagrams/PackagingDiagram'
import ProfilDiagram from './Diagrams&Models/structureDiagrams/ProfilDiagram'

//Comportement Diagrams
import UseCaseDiagram from './Diagrams&Models/comportementDiagrams/UseCaseDiagram'
import ActivityDiagram from './Diagrams&Models/comportementDiagrams/ActivityDiagram'
import StateTransitionDiagram from './Diagrams&Models/comportementDiagrams/StateTransitionDiagram'
import CommunicationDiagram from './Diagrams&Models/comportementDiagrams/CommunicationDiagram'
import SequenceDiagram from './Diagrams&Models/comportementDiagrams/SequenceDiagram'
import TimeDiagram from './Diagrams&Models/comportementDiagrams/TimeDiagram'
import InteractionDiagram from './Diagrams&Models/comportementDiagrams/InteractionDiagram'

//MERISE MODELS
import MCD from './Diagrams&Models/MeriseModels/MCD'
import MPD from './Diagrams&Models/MeriseModels/MPD'
import MLD from './Diagrams&Models/MeriseModels/MLD'
import MFD from './Diagrams&Models/MeriseModels/MFD'
import MCT from './Diagrams&Models/MeriseModels/MCT'

//Page Accueil
import Presentation from './Diagrams&Models/Presentation'

const Article = ({ selectedButton }) => {

  return (
    <>
      <div className='spaceArticle' id='textBeginning'></div>
      <section className="section">
        {(() => {
          switch (selectedButton) {
            case 'class-diagram':
              return <ClassDiagram />;
            case 'object-diagram':
              return <ObjectDiagram />;
            case 'componant-diagram':
              return <ComponantDiagram />;
            case 'composite-structure-diagram':
              return <CompositeStructureDiagram />;
            case 'deployment-diagram':
              return <DeploymentDiagram />;
            case 'packaging-diagram':
              return <PackagingDiagram />;
            case 'profil-diagram':
              return <ProfilDiagram />;
            case 'use-case-diagram':
              return <UseCaseDiagram />;
            case 'activity-diagram':
              return <ActivityDiagram />;
            case 'transition-state-diagram':
              return <StateTransitionDiagram />;
            case 'communication-diagram':
              return <CommunicationDiagram />;
            case 'sequence-diagram':
              return <SequenceDiagram />;
            case 'time-diagram':
              return <TimeDiagram />;
            case 'interaction-diagram':
              return <InteractionDiagram />;
            case 'MCD':
              return <MCD />;
            case 'MPD':
              return <MPD />;
            case 'MLD':
              return <MLD />;
            case 'MFD':
              return <MFD />;
            case 'MCT':
              return <MCT />;
            case 'presentation':
              return <Presentation />;
            default:
              return <Presentation />;
          }
        })()}
      </section>
    </>
  );
}

export default Article