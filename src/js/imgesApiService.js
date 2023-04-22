import axios from 'axios';

export default class ImageApiService {
  static ENDPOINT = 'https://pixabay.com/api/';
  static API_KEY = '35657603-43cfc8be52addbea10916dda5';

  constructor() {
    this.query = '';
    this.page = 1;
  }

  async getimage() {
    const url = `${ImageApiService.ENDPOINT}?key=${ImageApiService.API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;

    const { data } = await axios.get(url);
    console.log('🚀data:', data, 'page', this.page);
    this.incrementPage();
    console.log('page', this.page);
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
