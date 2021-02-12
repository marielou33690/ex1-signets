import './ListeDossiers.scss';
import BtnAjoutDossier from './BtnAjoutDossier';
import Dossier from './Dossier';
import tabDossiers from './data/Dossiers.json';

export default function ListeDossiers(props) {
    return(
        <div className="ListeDossiers">
            <ul>
                {
                    tabDossiers.map(dossier => 
                        <Dossier 
                        key={dossier.id}
                        id={dossier.id}
                        titre={dossier.titre}
                        couleur={dossier.couleur}
                        dateModif={dossier.dateModif} />
                    )
                }
            </ul>
            <BtnAjoutDossier />
        </div>
    );
}