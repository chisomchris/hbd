const carousel = {
  sliderItems: document.querySelectorAll("[data-carousel-image]"),
  body: document.querySelector(".carousel"),
};

function setCarousel(sliderItems, element, index) {
  element.style.width = `${sliderItems * 100}%`;
  element.style.left = `-${index}00%`;
  element.querySelectorAll(".carousel__image").forEach((item) => {
    item.style.width = `${100 / sliderItems}%`;
  });
  
  function addIndicators(imgCount) {
    function createIndicatorPane() {
      const indicatorWrapper = document.createElement("div");
      indicatorWrapper.setAttribute("class", "slider__indicator__wrapper");
      indicatorWrapper.setAttribute("data-indicator-wrapper", "");
      return indicatorWrapper;
    }
  
    function createIndicator() {
      const indicator = document.createElement("div");
      indicator.setAttribute("class", "indicator");
      indicator.setAttribute("data-indicator", "");
      return indicator;
    }
  
    function appendElement(parent, createChild, count) {
      for (i = 0; i < count; i++) {
        const child = createChild();
        parent.appendChild(child);
      }
    }
    const indicatorPane = createIndicatorPane();
  
    appendElement(indicatorPane, createIndicator, imgCount);
    document.querySelector(".slider__indicator").appendChild(indicatorPane);
    document.querySelectorAll(".indicator")[0].classList.add("active");
  }

  addIndicators(sliderItems);

  const indicators = document.querySelectorAll("[data-indicator]");

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      indicators.forEach((indicator) => {
        indicator.classList.remove("active");
      });
      indicator.classList.add("active");
      const index = [...indicators].indexOf(indicator);
      element.style.left = `-${index}00%`;
    });
  });
}

(() => {
  const links = document.querySelectorAll("nav ul li")
  const  menuBtn = document.querySelector("[data-hamburger]")
  const navMenu = document.querySelector("header nav")
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle("active");
      menuBtn.classList.toggle('active')
    })
  links.forEach(btn => {
    btn.addEventListener('click', () =>{
      navMenu.classList.remove("active");
      menuBtn.classList.remove('active')
    })
  })
})();


(function() {
  const wishes = ['Birthday-Messages-for-Brother-768x543.jpg',
    'Birthday-Messages-for-Girlfriend.jpg',
    'Birthday-Messages-for-Husband-1-768x545.jpg',
    'Birthday-Wishes-for-Daughter-1.jpg',
    'birthday-wishes-for-friend-its-time-to-shine-1080x720.png.pagespeed.ce.ODuzDCXY-2.png',
    'Birthday-Wishes-for-Sister-3.jpg',
    'Birthday-Wishes-for-Wife.jpg',
    'happy-birthday-many-happy-returns.jpg',
    'Happy-Birthday-Messages-768x557.jpg',
    'Happy-Birthday-To-You.jpg',
    'Happy-Birthday-Wishes-768x561.jpg',
    'Happy-Birthday.jpg',
    'long-happy-birthday-message.jpg',
    'Religious-Birthday-Wishes-1-768x605.jpg',
    'Romanric-Birthday-Messages.jpg',
    'warmest-wishes-for-a-happy-birthday.jpg'
  ]
  const baseRoute = './assets/images/'
  const canvas = document.querySelector('[data-wishes-wrapper] > img');
  let lastIndex = 0;
  canvas.style.transition = 'opacity 2000ms linear'
  const setIndex = function(length) {
    const index = Math.floor(Math.random() * length)
    if(index === lastIndex){
      return setIndex(length)
    }
    lastIndex = index
    return index
  }
  const show = function(index){
    canvas.src = baseRoute + wishes[index]
  }
  const changePic = function(){
    canvas.style.opacity = '0'
    const length = wishes.length
    const index = setIndex(length)
    setTimeout(()=>{
      show(index)
      canvas.style.opacity = '1'
    },2225)
   
  }
  changePic()
  setInterval(changePic, 45000)
})()

setCarousel(carousel.sliderItems.length, carousel.body, 0);

(function(){
    const sections = document.querySelectorAll('section')
    const options = {
      threshold : 0,
      rootMargin : '0px 0px -500px 0px'
    }

    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if(!entry.isIntersecting){
          return
        }else{
          const links = document.querySelectorAll("nav ul li")
          const value = entry.target.getAttribute('id')
          const index = [...sections].findIndex(item => {
            return item.getAttribute('id') === value
          })
          links.forEach((btn) => {
            btn.classList.remove("active");
          });
          links[index].classList.add('active')
        }
        
      })
    },options)
    sections.forEach(
      section => {
        observer.observe(section)
      }
    )
}
)()