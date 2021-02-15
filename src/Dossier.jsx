import './Dossier.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';

export default function Dossier(props) {
    let couleur = {
        backgroundColor: props.couleur
    }
    
    return(
        <li className="Dossier">
            <div className="image">
                <SortIcon />
                <img src={'images-dossiers/' + props.id + '.jpg'} alt={props.titre}/>
            </div>
            <div className="info" style={couleur}>
                <h2>{props.titre}</h2>
                <p>{'Modifié le : ' + props.dateModif}</p>
                <MoreVertIcon />
            </div>
        </li>
    );
}