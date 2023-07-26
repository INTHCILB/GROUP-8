//Popover scripts
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


//Tooltips scripts
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//Slider
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item'); 
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;
let refreshSlider = setInterval (()=> {next.click()}, 10000);

next.onclick = function(){
    if (active + 1 > lengthItems) {
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if (active - 1 < 0) {
        active = lengthItems;
    }else{
        active = active - 1;
    }reloadSlider();
}

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlider);
    refreshSlider = setInterval (()=> {next.click()}, 10000);
}

dots.forEach((li,key)=> {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

//product slider-houses

function filterCarouselByDefault() {
  // Find the default active filter and its text
  const defaultFilter = document.querySelector(".rlp-filter .active");
  if (defaultFilter) {
    const filterText = defaultFilter.textContent.toLowerCase().trim();
    const carouselItems = document.querySelectorAll(".c .rlp-container");

    // Iterate through each carousel item and check if it matches the default filter
    carouselItems.forEach(item => {
      const place = item.querySelector(".rlp-d-place").textContent.toLowerCase().trim();
      if (place !== filterText) {
        item.style.display = "none"; // Hide the item if it doesn't match the filter
      }
    });
  }
}

 // Call the filterCarouselByDefault function when the page is fully loaded
 window.addEventListener("load", filterCarouselByDefault);

const carousel = document.querySelector(".c");
const arrowBtns = document.querySelectorAll(".w .a");
const firstCardWidth = carousel.querySelector(".cd").offsetWidth;

// Add event listener for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -(firstCardWidth*4) : (firstCardWidth*4);
    })
});

//product slider-cars
function filterCarouselByDefault2() {
  // Find the default active filter and its text
  const defaultFilter2 = document.querySelector(".w2 .rlp-filter .active");
  if (defaultFilter2) {
    const filterText2 = defaultFilter2.textContent.toLowerCase().trim();
    console.log("Default Filter:", filterText2); // Add this line to check the default filter text
    const carouselItems2 = document.querySelectorAll(".c2 .rlp-container");

    // Iterate through each carousel item and check if it matches the default filter
    carouselItems2.forEach(item => {
      const place = item.querySelector(".rlp-d-place").textContent.toLowerCase().trim();
      console.log("Item Place:", place); // Add this line to check the place value of each item
      if (place !== filterText2) {
        item.style.display = "none"; // Hide the item if it doesn't match the filter
      }
    });
  }
}

// Call the filterCarouselByDefault2 function when the page is fully loaded
document.addEventListener("DOMContentLoaded", filterCarouselByDefault2);

// Rest of your JavaScript code for the second carousel functionality
const carousel2 = document.querySelector(".c2");
const arrowBtns2 = document.querySelectorAll(".w2 .a");
const firstCardWidth2 = carousel2.querySelector(".cd2").offsetWidth;

// Add event listener for the arrow buttons to scroll the carousel left and right
arrowBtns2.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel2.scrollLeft += btn.id === "left" ? -(firstCardWidth2 * 4) : (firstCardWidth2 * 4);
  });
});



//product slider-furniture

function filterCarouselByDefault3() {
  // Find the default active filter and its text
  const defaultFilter3 = document.querySelector(".w3 .rlp-filter .active");
  if (defaultFilter3) {
    const filterText3 = defaultFilter3.textContent.toLowerCase().trim();
    console.log("Default Filter:", filterText3); // Add this line to check the default filter text
    const carouselItems3 = document.querySelectorAll(".c3 .rlp-container");

    // Iterate through each carousel item and check if it matches the default filter
    carouselItems3.forEach(item => {
      const place = item.querySelector(".rlp-d-place").textContent.toLowerCase().trim();
      console.log("Item Place:", place); // Add this line to check the place value of each item
      if (place !== filterText3) {
        item.style.display = "none"; // Hide the item if it doesn't match the filter
      }
    });
  }
}

// Call the filterCarouselByDefault2 function when the page is fully loaded
document.addEventListener("DOMContentLoaded", filterCarouselByDefault3);

const carousel3 = document.querySelector(".c3");
const arrowBtns3 = document.querySelectorAll(".w3 .a");
const firstCardWidth3 = carousel3.querySelector(".cd3").offsetWidth;

// Add event listener for the arrow buttons to scroll the carousel left and right
arrowBtns3.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel3.scrollLeft += btn.id === "left" ? -(firstCardWidth3*4) : (firstCardWidth3*4);
    })
});

//product slider-featured-products

function filterCarouselByDefault4() {
  // Find the default active filter and its text
  const defaultFilter4 = document.querySelector(".w4 .rlp-filter .active");
  if (defaultFilter4) {
    const filterText4 = defaultFilter4.textContent.toLowerCase().trim();
    console.log("Default Filter:", filterText4); // Add this line to check the default filter text
    const carouselItems2 = document.querySelectorAll(".c4 .rlp-container");

    // Iterate through each carousel item and check if it matches the default filter
    carouselItems2.forEach(item => {
      const place4 = item.querySelector(".rlp-d-place").textContent.toLowerCase().trim();
      console.log("Item Place:", place4); // Add this line to check the place value of each item
      if (place4 !== filterText4) {
        item.style.display = "none"; // Hide the item if it doesn't match the filter
      }
    });
  }
}

// Call the filterCarouselByDefault2 function when the page is fully loaded
document.addEventListener("DOMContentLoaded", filterCarouselByDefault4);

const carousel4 = document.querySelector(".c4");
const arrowBtns4 = document.querySelectorAll(".w4 .a");
const firstCardWidth4 = carousel4.querySelector(".cd4").offsetWidth;

// Add event listener for the arrow buttons to scroll the carousel left and right
arrowBtns4.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel4.scrollLeft += btn.id === "left" ? -(firstCardWidth4*4) : (firstCardWidth4*4);
    })
});



// rlp hearts
function handleHeartClick(event) {
    const heartIcon = event.target;
    const heartContainer = heartIcon.parentNode;
    const heartCountElem = heartContainer.querySelector('.rlp-follow-count');
    const count = parseInt(heartCountElem.textContent);

    // Toggle the heart between solid and regular
    if (heartIcon.classList.contains('fa-regular')) {
      heartIcon.classList.remove('fa-regular');
      heartIcon.classList.add('fa-solid');
      heartIcon.style.color = 'red'; // Change the heart color to red
      heartCountElem.textContent = count + 1; // Increase the count
    } else {
      heartIcon.classList.remove('fa-solid');
      heartIcon.classList.add('fa-regular');
      heartIcon.style.color = ''; // Reset the heart color to default
      heartCountElem.textContent = count - 1; // Decrease the count
    }
  }

  // Add click event listeners to all heart icons
  const heartIcons = document.querySelectorAll('.rlp-follow i');
  heartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener('click', handleHeartClick);
  });

// rlg hearts
function handleHeartClick2(event) {
    const heartIcon2 = event.target;
    const heartContainer2 = heartIcon2.parentNode;
    const heartCountElem2 = heartContainer2.querySelector('.rlg-follow-count');
    const count2 = parseInt(heartCountElem2.textContent);

    // Toggle the heart between solid and regular
    if (heartIcon2.classList.contains('fa-regular')) {
      heartIcon2.classList.remove('fa-regular');
      heartIcon2.classList.add('fa-solid');
      heartIcon2.style.color = 'red'; // Change the heart color to red
      heartCountElem2.textContent = count2 + 1; // Increase the count
    } else {
      heartIcon2.classList.remove('fa-solid');
      heartIcon2.classList.add('fa-regular');
      heartIcon2.style.color = ''; // Reset the heart color to default
      heartCountElem2.textContent = count2 - 1; // Decrease the count
    }
  }

  // Add click event listeners to all heart icons
  const heartIcons2 = document.querySelectorAll('.rlg-follow i');
  heartIcons2.forEach((heartIcon2) => {
    heartIcon2.addEventListener('click', handleHeartClick2);
  });

const hearthover = document.querySelectorAll('.rlp-follow i.fa-heart');


//Chat hover
// Get all elements with the class "profile-chat"
const profileChatDivs = document.querySelectorAll('.profile-chat');

// Function to handle hover events
function handleHover(event) {
  const icon = event.currentTarget.querySelector('.profile-chat-icon');
  icon.classList.toggle('fa-solid'); // Toggle the "fa-solid" class on hover
}

// Add event listeners for hover to each .profile-chat div
profileChatDivs.forEach((div) => {
  div.addEventListener('mouseenter', handleHover);
  div.addEventListener('mouseleave', handleHover);
});

// Function to reset the carousel scroll position to the top
function resetCarouselScroll(carousel) {
  carousel.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", function () {
  const wrappers = document.querySelectorAll(".wrapper");

  wrappers.forEach((wrapper) => {
    handleFiltering(wrapper);
  });
});

function handleFiltering(wrapper) {
  const filterButtons = wrapper.querySelectorAll(".rlp-filter .rlp-place");
  const productItems = wrapper.querySelectorAll(".rlp-container");
  const carousel = wrapper.querySelector(".carousel");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the 'active' class from all filter buttons within the current wrapper
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add the 'active' class to the clicked filter button within the current wrapper
      this.classList.add("active");

      // Get the selected place from the clicked filter button within the current wrapper
      const selectedPlace = this.textContent.trim().toLowerCase();

      // Show or hide the product items based on the selected place within the current wrapper
      productItems.forEach((item) => {
        const place = item.querySelector(".rlp-d-place").textContent.trim().toLowerCase();
        if (selectedPlace === "all" || place === selectedPlace) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      // Reset the carousel scroll position to the top when a new filter is selected within the current wrapper
      resetCarouselScroll(carousel);
    });
  });
}

// JavaScript to handle dropdown menu for each link-container
const linkContainers = document.querySelectorAll('.link-container');
const linkRContainers = document.querySelectorAll('.linkR-container');

linkContainers.forEach((linkContainer) => {
  const dropdownMenu = linkContainer.querySelector('.dropdown-Menu');
  linkContainer.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
  });
  linkContainer.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none';
  });
});

linkRContainers.forEach((linkRContainer) => {
  const dropdownMenu = linkRContainer.querySelector('.dropdown-Menu');
  linkRContainer.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
  });
  linkRContainer.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none';
  });
});

// Smooth scrolling to target containers with offset
function smoothScrollToTarget(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  let navbarTopHeight = document.querySelector(".navbar-top").offsetHeight;
  let navbarBotHeight = document.querySelector(".navbar-bot").offsetHeight;
  const spacing = 20; // Adjust the spacing value as needed

  const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset; // Calculate the offset of the target container relative to the viewport

  window.scroll({
      top: targetOffset - navbarTopHeight - navbarBotHeight - spacing,
      behavior: "smooth"
  });
}

// Add click event listeners to all links with class "bcl-text"
const links = document.querySelectorAll(".bcl-text");
links.forEach(link => {
  link.addEventListener("click", smoothScrollToTarget);
});

