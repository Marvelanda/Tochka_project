const slider = document.querySelector('.slider');
const image = slider.querySelector('img');
const dots = document.querySelectorAll('[data-name="images"]');

const src = [
  '/img/slider/DSCF1317.jpg',
  '/img/slider/DSCF0631.jpg',
  '/img/slider/DSCF1259.jpg',
  '/img/slider/DSCF1679.jpg',
  '/img/slider/_DSF4253.jpg',
  '/img/slider/photo35.jpg',
  '/img/slider/DSCF3868.jpg',
];

function moveInt() {
  let index = 0;

  setInterval(() => {
    dots.forEach((item) => {
      item.checked = false;
    });
    if (index < src.length - 1) {
      dots[index].checked = false;
      index++;
      image.src = src[index];
      dots[index].checked = true;
    } else if (index >= src.length - 1) {
      dots[index].checked = false;
      index = 0;
      image.src = src[index];
      dots[index].checked = true;
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', (evt) => {
        index = evt.target.id;
        dots.forEach((item) => {
          item.checked = false;
        });

        image.src = src[evt.target.id];

        dots[evt.target.id].checked = true;
      });
    }
  }, 4000);
}

moveInt();

// function moveImg() {
//   let index = 0;

//   document.addEventListener('keydown', (evt) => {
//     if (evt.key === 'ArrowRight') {
//       if (index < src.length - 1) {
//         dots[index].checked = false;
//         index++;
//         image.src = src[index];
//         dots[index].checked = true;
//       } else {
//         dots[index].checked = false;
//         index = 0;
//         image.src = src[index];
//         dots[index].checked = true;
//       }
//     }

//     if (evt.key === 'ArrowLeft') {
//       if (index > 0) {
//         dots[index].checked = false;
//         index--;
//         image.src = src[index];
//         dots[index].checked = true;
//       } else {
//         dots[index].checked = false;
//         index = 6;
//         image.src = src[index];
//         dots[index].checked = true;
//       }
//     }
//   });
// }

// moveImg();
