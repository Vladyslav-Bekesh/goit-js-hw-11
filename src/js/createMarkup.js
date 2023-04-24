export function createMarkup(imagesData) {
  console.log('creating markup');
  const markup = imagesData.reduce(
    (markup, images) => markup + createListELement(images),
    ''
  );
  console.log('markup created');

  return markup;
}

function createListELement({
  webformatURL,
  largeImageURL,
  likes,
  tags,
  views,
  downloads,
  comments,
}) {
  return `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>`;
}

function createMarkup(markup, element) {
  element.innerHTML = markup;
}
// export { createMarkup };