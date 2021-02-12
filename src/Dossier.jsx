import './Dossier.scss';

export default function Dossier(props) {
    let couleur = {
        backgroundColor: props.couleur
    }
    
    return(
        <li className="Dossier">
            <div className="image">
                <img src={'images-dossiers/' + props.id + '.jpg'} alt={props.titre}/>
            </div>
            <div className="info" style={couleur}>
                <h2>{props.titre}</h2>
                <p>{'Modifié le : ' + props.dateModif}</p>
            </div>
        </li>
    );
}