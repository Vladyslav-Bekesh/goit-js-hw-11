import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ImageApiService } from './js/imagesApiService';
import LoadMoreBtn from './js/LoadMoreButton';
import { createMarkup, insertMarkup } from './js/createMarkup';

const imageApiService = new ImageApiService();

const refs = {
  form: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
};

const loadMoreButton = new LoadMoreBtn({
  selector: '.load-more',
  isHidden: true,
});

console.log(loadMoreButton);

refs.form.addEventListener('submit', submitingForm);
loadMoreButton.button.addEventListener('click', fetchNewImages);

async function submitingForm(event) {
  event.preventDefault();
  const query = refs.form.elements.searchQuery.value;
  imageApiService.query = query;
  imageApiService.resetPage();

  loadMoreButton.show();

  const responce = await imageApiService.getimage();
  Notify.info(`Hooray! We found ${responce.totalHits} images.`);

  refs.gallery.innerHTML = createMarkup(responce.hits);
}

async function fetchNewImages() {
  console.log('I WANT MORE');

  imageApiService.incrementPage();
  
  const responce = await imageApiService.getimage();
  refs.gallery.insertAdjacentHTML('beforeend', createMarkup(responce.hits));

  if ((imageApiService.page + 1) * 40 >= responce.totalHits) {
    console.log('🚀responce.totalHits:', responce.totalHits);
    console.log('🚀imageApiService.page:', imageApiService.page * 40);
    Notify.failure('Nothing remain');
    loadMoreButton.disable();
    return;
  }
}
