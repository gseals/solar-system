import $ from 'jquery';
import status from '../../helpers/data/planets';
import util from '../../helpers/utilities';
import './singlePlanetCard.scss';
import multiPlanet from '../planetCards/planetCards';

const planets = status.plane();

const singleCard = () => {
  $('body').on('click', '.card', () => {
    for (let i = 0; i < planets.length; i += 1) {
      const planet = planets[i];
      const lomString = `
  <div class="newCard">
    <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
  <img src="${planet.imageUrl}" class="card-img-top planetPic" alt="...">
  <div class="card-body">
    <h5 class="card-title planetName2 text-center">${planet.name}</h5>
    <div class="planetInfo">
    <p class="card-text">${planet.description}</p>
  <ul class="list-group list-group-flush">
    <li>Gaseous Planet: ${planet.isGasPlanet}</li>
    <li>Number of moons: ${planet.numberOfMoons}</li>
    <li>Name of Largest Moon: ${planet.nameOfLargestMoon}</li>
  </ul>
  </div>
</div>
</div>
<p></p>`;
      util.printToDom('single-card', lomString);
      util.printToDom('card-place', '');
    }
    $('.close').on('click', () => {
      util.printToDom('single-card', '');
      multiPlanet.planetCard();
      multiPlanet.event();
    });
  });
};

export default { singleCard };
