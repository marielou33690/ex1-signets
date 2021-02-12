import './Entete.scss';

export default function Entete(props) {
    return(
      <header className="Entete">
        <h1>Signets</h1>
        <ul className="navUtil">
          <li>Marie-Lou Denis</li>
          <li>
            <img src="public/avatar.png" alt=""/>
          </li>
        </ul>
      </header>
    );
}