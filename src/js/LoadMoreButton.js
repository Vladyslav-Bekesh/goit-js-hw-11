export default class LoadMoreBtn {
  constructor({ selector, isHiden = false }) {
    this.button = this.getButton('.load-more');
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
    this.button.classList.add('hidden');
  }
  show() {
    this.button.classList.remove('hidden');
  }
}
