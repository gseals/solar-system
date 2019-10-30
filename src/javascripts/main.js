import 'bootstrap';
import '../styles/main.scss';
import planetCards from './components/planetCards/planetCards';
import single from './components/singlePlanetCard/singlePlanetCard';

const init = () => {
  planetCards.planetCard();
  planetCards.event();
  single.singleCard();
};

init();
