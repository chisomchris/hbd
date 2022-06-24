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

const headerModule = (() => {
  const links = document.querySelectorAll("nav ul li")
  const  menuBtn = document.querySelector("[data-hamburger]")
  const navMenu = document.querySelector("header nav")
  const addClickListener = function() {
    links.forEach(btn => {
      btn.addEventListener('click', () => {
        links.forEach((btn) => {
          btn.classList.remove("active");
        });
        btn.classList.add("active");
        navMenu.classList.remove("active");
        menuBtn.classList.remove('active')
      })
    })
  } 
  const toggleMenu = () => {
    menuBtn.addEventListener("click", (e) => {
      navMenu.classList.toggle("active");
      menuBtn.classList.toggle('active')
    })}

    return {addClickListener,toggleMenu}
})()


const wish = (function() {
  const wishes = ['Birthday-Messages-for-Brother-768x543.jpg',
    'Birthday-Messages-for-Girlfriend.jpg',
    'Birthday-Messages-for-Husband-1-768x545.jpg',
    'Birthday-Wishes-for-Daughter-1.jpg',
    'birthday-wishes-for-friend-its-time-to-shine-1080x720.png.pagespeed.ce.ODuzDCXY-2.png',
    'Birthday-Wishes-for-Sister-3.jpg',
    'Birthday-Wishes-for-Wife.jpg',
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
  setInterval(changePic, 30000)

  return{ canvas}
})()

setCarousel(carousel.sliderItems.length, carousel.body, 0);
headerModule.addClickListener()
headerModule.toggleMenu()


const sections = document.querySelectorAll('section')
const options = {
  threshold : 0,
  rootMargin : '-200px 0px -300px 0px'
}
console.log(sections)

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return
    }else{
      console.log(entry.target)
    }
    
  })
},options)
sections.forEach(
  section => {
    observer.observe(section)
  }
)
// observer.observe(sections)