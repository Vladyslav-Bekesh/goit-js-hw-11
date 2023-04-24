import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ImageApiService } from './js/imagesApiService';
import LoadMoreBtn from './js/LoadMoreButton';

const imageApiService = new ImageApiService();

const refs = {
  form: document.getElementById('search-form'),
};

const loadMoreButton = new LoadMoreBtn({
  selector: '.load-more',
  isHidden: true,
});

console.log(loadMoreButton);
loadMoreButton.disable();
setTimeout(() => {
  loadMoreButton.enable();
}, 3000);


refs.form.addEventListener('submit', submitingForm);

async function submitingForm(event) {
  event.preventDefault();
  const query = refs.form.elements.searchQuery.value;
  imageApiService.query = query;

  const responce = await imageApiService.getimage();

  createMarkup(responce.hits);
}
