import $ from 'jquery';
import './search.scss';

const searchFunc = () => {
  $(document).ready(() => {
    $('#input').keyup(() => {
      const value = $('#input').val().toUpperCase();
      $('.planetFind').hide();
      $(`.planetFind:contains("${value}")`).closest('.planetFind').show();
    });
    if ($('#input').val() === 'Search..') {
      $('.planetFind').show();
    }
  });
};

export default { searchFunc };
