// storing card section for the desktop part.
const cards = [
  {
    title: 'Tonic',
    technology: ['Canopy', 'Back End Dev', 2015],
    images: './images/Snapshoot-1.svg',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    textPopup:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus explicabo, nobis quia expedita fugit vel, est, dolorem aperiam error quibusdam itaque amet ipsa placeat numquam dolorum nemo tempore harum minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione corporis, neque, quae totam incidunt ut veniam estnobis sint delectus aliquid aut minima consequatur praesentium nemo impedit dolorum aspernatur.',
    langPopup: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstaps'],
    live: 'https://yidnekachew-cmd.github.io/Personal-Portfolio/',
    source: 'git@github.com:Yidnekachew-cmd/Personal-Portfolio.git',
    closeBtn: '&times;',
    languages: ['html', 'css', 'javaScript'],
  },
  {
    title: 'Multi-Post Stories',
    technology: ['FACEBOOK', 'Full Stack Dev', 2015],
    images: './images/Snapshoot-2.svg',
    text: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    textPopup:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus explicabo, nobis quia expedita fugit vel, est, dolorem aperiam error quibusdam itaque amet ipsa placeat numquam dolorum nemo tempore harum minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione corporis, neque, quae totam incidunt ut veniam estnobis sint delectus aliquid aut minima consequatur praesentium nemo impedit dolorum aspernatur.',
    langPopup: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstaps'],
    live: 'https://yidnekachew-cmd.github.io/Personal-Portfolio/',
    source: 'git@github.com:Yidnekachew-cmd/Personal-Portfolio.git',
    closeBtn: '&times;',
    languages: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
  {
    title: 'Facebook 360',
    technology: ['FACEBOOK', 'Full Stack Dev', 2015],
    images: './images/Snapshoot-3.svg',
    text: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    textPopup:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus explicabo, nobis quia expedita fugit vel, est, dolorem aperiam error quibusdam itaque amet ipsa placeat numquam dolorum nemo tempore harum minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione corporis, neque, quae totam incidunt ut veniam estnobis sint delectus aliquid aut minima consequatur praesentium nemo impedit dolorum aspernatur.',
    langPopup: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstaps'],
    live: 'https://yidnekachew-cmd.github.io/Personal-Portfolio/',
    source: 'git@github.com:Yidnekachew-cmd/Personal-Portfolio.git',
    closeBtn: '&times;',
    languages: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
  {
    title: 'Uber Navigation',
    technology: ['Uber', 'Lead Developer', 2018],
    images: './images/Snapshoot-4.svg',
    text: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    textPopup:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus explicabo, nobis quia expedita fugit vel, est, dolorem aperiam error quibusdam itaque amet ipsa placeat numquam dolorum nemo tempore harum minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione corporis, neque, quae totam incidunt ut veniam estnobis sint delectus aliquid aut minima consequatur praesentium nemo impedit dolorum aspernatur.',
    languages: ['html', 'Ruby on rails', 'css', 'javaScript'],
    langPopup: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstaps'],
    live: 'https://yidnekachew-cmd.github.io/Personal-Portfolio/',
    source: 'git@github.com:Yidnekachew-cmd/Personal-Portfolio.git',
    closeBtn: '&times;',
  },
];

// storing data for mobile part
const moboCards = [
  {
    title: 'Tonic',
    technology: ['Canopy', 'Back End Dev', 2015],
    images: './images/image1.svg',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    textPopup:
      '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus explicabo, nobis quia expedita fugit vel, est, dolorem aperiam error quibusdam itaque amet ipsa placeat numquam dolorum nemo tempore harum minus.',
    closeBtn: '&times;',
    languages: ['html', 'css', 'javaScript'],
    live: 'https://yidnekachew-cmd.github.io/Personal-Portfolio/',
    source: 'git@github.com:Yidnekachew-cmd/Personal-Portfolio.git',
  },
  {
    title: 'Multi-Post Stories',
    technology: ['Canopy', 'Back End Dev', 2015],
    images: './images/image2.svg',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javaScript'],
    textPopup:
      '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus explicabo, nobis quia expedita fugit vel, est, dolorem aperiam error quibusdam itaque amet ipsa placeat numquam dolorum nemo tempore harum minus.',
    closeBtn: '&times;',
    live: 'https://yidnekachew-cmd.github.io/Personal-Portfolio/',
    source: 'git@github.com:Yidnekachew-cmd/Personal-Portfolio.git',
  },
  {
    title: 'Tonic',
    technology: ['Canopy', 'Back End Dev', 2015],
    images: './images/image3.svg',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    languages: ['html', 'css', 'javaScript'],
    textPopup:
      '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus explicabo, nobis quia expedita fugit vel, est, dolorem aperiam error quibusdam itaque amet ipsa placeat numquam dolorum nemo tempore harum minus.',
    closeBtn: '&times;',
    live: 'https://yidnekachew-cmd.github.io/Personal-Portfolio/',
    source: 'git@github.com:Yidnekachew-cmd/Personal-Portfolio.git',
  },
  {
    title: 'Multi-Post Stories',
    technology: ['Canopy', 'Back End Dev', 2015],
    images: './images/image4.svg',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    languages: ['html', 'css', 'javaScript'],
    textPopup:
      '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus explicabo, nobis quia expedita fugit vel, est, dolorem aperiam error quibusdam itaque amet ipsa placeat numquam dolorum nemo tempore harum minus.',
    closeBtn: '&times;',
    live: 'https://yidnekachew-cmd.github.io/Personal-Portfolio/',
    source: 'git@github.com:Yidnekachew-cmd/Personal-Portfolio.git',
  },
];

// Class selections
// const body = document.querySelector('body');
// const cardSection = document.querySelector('#cards');
const desktop = document.querySelector('.desktop');
const mobile = document.querySelector('.mobile');

// looping through the cards of the desktop to add cards dynamically
for (let i = 0; i < cards.length; i += 1) {
  let lang = '';
  cards[i].languages.forEach((cards) => {
    lang = `${lang}<li class="${cards}">${cards}</li>`;
  });

  let tech = '';
  cards[i].technology.forEach((techn) => {
    tech = `${tech}<li class="${techn}">${techn}</li>`;
  });

  desktop.innerHTML += `
  <div class="card">
  <div class="card-img">
    <img src="${cards[i].images}" alt="tonic project image" />
  </div>
  <div class="card-content">
    <h2 class="card-title">${cards[i].title}</h2>
    <ul class="card-info">
      ${tech}
    </ul>
    <p class="card-para">${cards[i].text}</p>
    <ul class="card-lang">
    ${lang}
    </ul>
    <button class="card-btn card-btn-${i}">See Project</button>
  </div>
</div>
`;
}

// looping through the cards of the mobile to add cards dynamically
for (let i = 0; i < moboCards.length; i += 1) {
  let lang = '';
  moboCards[i].languages.forEach((cards) => {
    lang = `${lang}<li class="${cards}">${cards}</li>`;
  });

  let tech = '';
  moboCards[i].technology.forEach((techn) => {
    tech = `${tech}<li class="${techn}">${techn}</li>`;
  });

  mobile.innerHTML += `
  <div class="card">
  <div class="card-content">
    <h2 class="card-title">${moboCards[i].title}</h2>
    <ul class="card-info">
     ${tech}
    </ul>
    <p class="card-para">${moboCards[i].text}</p>
    <ul class="card-lang">
      ${lang}
    </ul>
    <button class="card-btn card-${i}">See Project</button>
  </div>
  <div class="card-img">
    <img src="${moboCards[i].images}" alt="tonic project image" />
    </div>
    </div
    `;
}

// const modal = document.querySelector(".modal");
// const modalDesktop = document.getElementById("modal-desktop");

// const modalMobile = document.querySelector(".mobile");
// const closeIcon = document.querySelector("#close-btn");

// // event listener for the desktop
// for (let i = 0; i < cards.length; i += 1) {
//   document.querySelector(`.card-btn-${i}`).addEventListener("click", () => {
//     console.log("clicked");

//     let tech = "";

//     cards[i].technology.forEach((cards) => {
//       tech = `${tech}<li class="${cards}">${cards}</li>`;
//     });

//     let lang = "";

//     cards[i].langPopup.forEach((cards) => {
//       lang = `${lang}<li class="${cards}">${cards}</li>`;
//     });

//     modalDesktop.innerHTML = `
//     <div class="modal-title">
//           <h2 class="card-title">${cards[i].title}</h2>

//         </div>
//         <ul class="card-info">
//          ${tech}
//         </ul>
//         <div class="modal-img">

//         </div>
//         <div class="modal-content">
//           <p class="card-para">
//             ${cards[i].textPopup}
//           </p>
//           <div class="lang-and-btn">
//             <ul class="card-lang">
//              ${lang}
//             </ul>

//             <div class="modal-btn">
//               <button class="live-btn">
//                 See live
//                 <span><a href="${cards[i].live}"></a><img
// src="./images/Icon - Export.svg" alt="" /></a></span>
//               </button>
//               <button class="source-btn">
//                 See Source
//                 <span><a href="${cards[i].source}"><img
//  src="./images/github in button.svg" alt="" /></a></span>
//               </button>
//             </div>
//           </div>
//         </div>`;
//   });

// //   modalDesktop.appendChild(cardTitle);

// //   modal.appendChild(modalDesktop);
// //   body.appendChild(modal);

// }
