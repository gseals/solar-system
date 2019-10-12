import 'bootstrap';
import '../styles/main.scss';
import planetCards from './components/planetCards/planetCards';

const init = () => {
  planetCards.planetCard();
  planetCards.event();
};

init();
