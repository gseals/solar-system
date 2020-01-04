import $ from 'jquery';
import status from '../../helpers/data/planets';
import util from '../../helpers/utilities';
import './planetCards.scss';

const planets = status.plane();

const planetCard = () => {
  let domString = '';
  planets.forEach((planet) => {
    domString += `
    <div class="card ${planet.id} planetFind" id="${planet.name}"style="width: 18rem;">
    <img src="${planet.imageUrl}" id="${planet.id}" class="card-img-top planetPic" alt="...">
    <div class="card-body">
      <h5 class="card-title planetName text-center">${planet.name.toUpperCase()}</h5>
      </div>
  </div>
  <p></p>`;
  });
  util.printToDom('card-place', domString);
};

const event = () => {
  $('.planetInfo').hide();
  $('.planetPic').hide();
  $('.card').on('mouseenter mouseleave', (e) => {
    const planet = $(e.target);
    planet.find('.planetPic').fadeToggle(500);
    planet.find('.planetName').hide();
  });
  $('.card').mouseleave(() => {
    $('.planetName').fadeIn(900);
  });
};

export default { planetCard, event };
