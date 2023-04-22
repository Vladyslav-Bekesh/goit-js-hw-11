import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ImageApiService from './js/imgesApiService';
import createMarkup from './js/createMarkup';

const imageApiService = new ImageApiService();

const refs = {
  form: document.getElementById('search-form'),
};

refs.form.addEventListener('submit', submitingForm);

function submitingForm(event) {
  event.preventDefault();
  const query = refs.form.elements.searchQuery.value;
  imageApiService.query = query;

  createMarkup(imageApiService.getimage());
}
