function createMarkup(imagesData) {
  console.log('creating markup');
  const imagesObj = imagesData.hits;
  const markup = imagesObj.reduce(
    (markup, images) => markup + createListELement(images),
    ''
  );
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

export { createMarkup };