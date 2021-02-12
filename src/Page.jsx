import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import './Page.scss';

export default function Page() {
  return (
    <div className="Page">
        <Entete />
        <section className="contenuPrincipal">
          <ListeDossiers />
        </section>
    </div>
  );
}
