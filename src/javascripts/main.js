import 'bootstrap';
import '../styles/main.scss';
import planetCards from './components/planetCards/planetCards';
import single from './components/singlePlanetCard/singlePlanetCard';
import search from './components/search/search';

const init = () => {
  planetCards.planetCard();
  planetCards.event();
  single.singleCard();
  search.searchFunc();
};

init();
