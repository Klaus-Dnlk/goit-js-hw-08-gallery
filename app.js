const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// создание и рендер разметки

  const makeGalleryEl = ({preview, original, description}) => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');

    galleryImg.src = preview;
    galleryImg.dataset.source = original;
    galleryImg.alt = description;

    galleryItem.append(galleryLink);
    galleryLink.append(galleryImg);

    return galleryItem;
  }

  

  const elements = galleryItems.map(makeGalleryEl);

  const galleryItemsContainer = document.querySelector('.js-gallery');

  galleryItemsContainer.append(...elements);

  console.log(galleryItems);

  // делегирование, открытие модального окна, подмена значения src

  galleryItemsContainer.addEventListener('click', onClick);
  
  const modal = document.querySelector('.js-lightbox')
  const lightBoxImage = document.querySelector('.lightbox__image');
  
  function onClick (e) {
      
      if (e.target.nodeName !== 'IMG') {
        return;
      }
      modal.classList.add('is-open');
      const url = e.target.dataset.source;
      lightBoxImage.src = url;      
    } 

  // закрытие модального окна, очистка src

  const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
  
  closeBtn.addEventListener('click', modalClose);

  function modalClose() {    
    modal.classList.remove('is-open');
    lightBoxImage.src = "";
  }



  // доп. закрытие по клику на overlay

  const overlay = document.querySelector('.lightbox__overlay');

  overlay.addEventListener('click', onOverlayClick);

  function  onOverlayClick(e) {    
    if(e.currentTarget === e.target) {
      modal.classList.remove('is-open');
      lightBoxImage.src = "";      
    }
  }
 
  //  доп. закрытие по Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modal.classList.remove('is-open');
      lightBoxImage.src = "";
    }
    });