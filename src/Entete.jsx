import './Entete.scss';
import avatar from './avatar.png';

export default function Entete(props) {
    return(
      <header className="Entete">
        <h1>Signets</h1>
        <ul className="navUtil">
          <li>Marie-Lou Denis</li>
          <li>
            <img src={avatar} alt=""/>
          </li>
        </ul>
      </header>
    );
}