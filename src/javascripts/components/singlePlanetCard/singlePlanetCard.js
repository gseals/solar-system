import $ from 'jquery';
import status from '../../helpers/data/planets';
import util from '../../helpers/utilities';
import './singlePlanetCard.scss';
import planets from '../planetCards/planetCards';

const singleCard = () => {
  $('.card').on('click', () => {
    for (let i = 0; i < status.planets.length; i += 1) {
      const planet = status.planets[i];
      util.printToDom('card-place', '');
      const lomString = `
  <div class="newCard" style="width: 18rem;">
    <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
  <img src="${planet.imageUrl}" class="card-img-top planetPic" alt="...">
  <div class="card-body">
    <h5 class="card-title planetName2 text-center list-group-item">${planet.name}</h5>
    <div class="planetInfo">
    <p class="card-text list-group-item">Description: ${planet.description}</p>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Gaseous Planet: ${planet.isGasPlanet}</li>
    <li class="list-group-item">Number of moons: ${planet.numberOfMoons}</li>
    <li class="list-group-item">Name of Largest Moon: ${planet.nameOfLargestMoon}</li>
  </ul>
  </div>
</div>
</div>
<p></p>`;
      util.printToDom('single-card', lomString);
    }
    $('.close').on('click', () => {
      util.printToDom('single-card', '');
      planets.planetCard();
      planets.event();
    });
  });
};

export default { singleCard };
