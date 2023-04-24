import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

export class ImageApiService {
  static ENDPOINT = 'https://pixabay.com/api/';
  static API_KEY = '35657603-43cfc8be52addbea10916dda5';
  static PER_PAGE = 40;

  constructor() {
    this.query = '';
    this.page = 1;
  }

  async getimage() {
    const url = `${ImageApiService.ENDPOINT}?key=${ImageApiService.API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${ImageApiService.PER_PAGE}`;

    const { data } = await axios.get(url);
    if (data.totalHits === 0) {
      Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
      throw new Error("data is empty");
    }
    console.log(data);

    return data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}

// this.incrementPage();

// return axios.get(url).then(({ data }) => {
//   this.incrementPage();
//   return data;
// });
// return fetch(url).then((data) => {
//   this.incrementPage();
//   return data.json();
// });
