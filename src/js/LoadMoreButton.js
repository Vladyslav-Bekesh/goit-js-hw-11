export default class LoadMoreBtn {
  constructor({ selector, isHiden = true }) {
    this.button = this.getButton('.load-more');
    isHiden && this.hide();
  }
  getButton(selector) {
    return document.querySelector(selector);
  }
  disable() {
    this.button.disabled = true;
    this.button.textContent = 'Loading . . .';
  }
  enable() {
    this.button.disabled = false;
    this.button.textContent = 'Load more';
  }
  hide() {
    console.log("class added");
    this.button.classList.add('hidden');
  }
  show() {
    this.button.classList.remove('hidden');
    console.log('class removed');
  }
  empty() {
        this.button.disabled = true;
        this.button.textContent = 'Nothing to show';
  }
}
