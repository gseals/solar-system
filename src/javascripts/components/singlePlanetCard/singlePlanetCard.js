import $ from 'jquery';
import status from '../../helpers/data/planets';
import util from '../../helpers/utilities';
import './singlePlanetCard.scss';
import multiPlanet from '../planetCards/planetCards';

const planets = status.plane();

const singleCard = () => {
  $('body').on('click', '.card', (event) => {
    const onePlanet = event.target.id;
    let specificPlanet = [];
    specificPlanet = planets.filter((planet) => planet.name === onePlanet);
    console.log(specificPlanet);
    let lomString = '';
    lomString = `
    <div class="newCard">
    <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    <img src="${specificPlanet[0].imageUrl}" class="card-img-top planetPic" alt="...">
    <div class="card-body">
    <h5 class="card-title planetName2 text-center">${specificPlanet[0].name}</h5>
    <div class="planetInfo">
    <p class="card-text">${specificPlanet[0].description}</p>
    <ul class="list-group list-group-flush">
    <li>Gaseous Planet: ${specificPlanet[0].isGasPlanet}</li>
    <li>Number of moons: ${specificPlanet[0].numberOfMoons}</li>
    <li>Name of Largest Moon: ${specificPlanet[0].nameOfLargestMoon}</li>
  </ul>
  </div>
</div>
</div>
<p></p>`;
    util.printToDom('single-card', lomString);
    util.printToDom('card-place', '');
  });
  $('body').on('click', '.close', () => {
    util.printToDom('single-card', '');
    multiPlanet.planetCard();
    multiPlanet.event();
  });
};

export default { singleCard };
