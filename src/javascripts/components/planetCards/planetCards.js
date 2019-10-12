import $ from 'jquery';
import status from '../../helpers/data/planets';
import util from '../../helpers/utilities';
import './planetCards.scss';

const planetCard = () => {
  let domString = '';
  for (let i = 0; i < status.planets.length; i += 1) {
    const planet = status.planets[i];
    domString += `
    <div class="card" style="width: 18rem;">
    <img src="${planet.imageUrl}" class="card-img-top planetPic" alt="...">
    <div class="card-body">
      <h5 class="card-title planetName">${planet.name}</h5>
      <div class="planetInfo">
      <p class="card-text">Description: ${planet.description}</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Gaseous Planet: ${planet.isGasPlanet}</li>
      <li class="list-group-item">Number of moons: ${planet.numberOfMoons}</li>
      <li class="list-group-item">Name of Largest Moon: ${planet.nameOfLargestMoon}</li>
    </ul>
    </div>
  </div>
  </div>
  <p></p>`;
  }
  util.printToDom('card-place', domString);
};

const event = () => {
  $('.planetInfo').hide();
  $('.planetPic').hide();
  $('.card').on('mouseenter mouseleave', (e) => {
    const planet = $(e.target);
    planet.find('.planetPic').toggle();
    planet.find('.planetName').toggle();
  });
};

export default { planetCard, event };
