$(document).ready(function() {
    // Add active class on menu item click
    $('ul li').click(function(e) {
        e.preventDefault();
        $('li').removeClass('active');
        $(this).addClass('active');
    });

    // Mega Menu hover behavior
    $(".drop-down").hover(function() {
        $('.mega-menu').addClass('display-on');
    }, function() {
        $('.mega-menu').removeClass('display-on');
    });
    function toggleMenu() {
        var menu = document.getElementById("mobileNav");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    $('.banner').slick({
        dots: false,       // Hides navigation dots
        arrows: false,     // Removes next/prev buttons
        infinite: true,    
        speed: 500,        
        fade: true,        
        autoplay: true,    // Enables auto sliding
        autoplaySpeed: 3000, // Adjusts fade interval (3 seconds)
        cssEase: 'linear'
    });
    

    $('.offer-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    $('.women-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    $('.releted').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,  
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,  
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
      });
    
      $('.card_slider').slick({
        slidesToShow: 3,  // Show 3 items on larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,  
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,  
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    
    
    $('.company-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,  
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,  
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
      });


      var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });

});

// all product page
function changeImage(src, event) {
    const productContainer = event.target.closest('.product-container');
    const productImage = productContainer.querySelector('.product-image');

    productImage.src = src;

    const colorOptions = productContainer.querySelectorAll('.color-option');
    colorOptions.forEach(option => option.classList.remove('selected'));

    event.target.classList.add('selected');
}



function toggleHeart(element) {
    if (element.classList.contains("fa-heart-o")) {
        element.classList.remove("fa-heart-o");
        element.classList.add("fa-heart", "clicked");
    } else {
        element.classList.remove("fa-heart", "clicked");
        element.classList.add("fa-heart-o");
    }
}

// Function to handle the "add to cart" action (you can implement your logic here)
// function addToCart() {
//     // Example: Toggle the heart color to indicate that the item is added to the cart
//     const heartIcon = document.querySelector('.heart-icon');
//     heartIcon.classList.toggle('clicked');
//     alert('Item added to cart!');
// }

// all product page







//   product details
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
var ColorOptions = document.querySelectorAll('.color-option');

$(document).ready(function() {
    // Handle small image click events
    $(SmallImg).each(function(index) {
        $(this).click(function() {
            ProductImg.src = this.src;
        });
    });

    // Handle color option click events dynamically
    $(ColorOptions).each(function() {
        $(this).click(function() {
            var newImgSrc = $(this).data('img'); // Get image from the data-img attribute
            ProductImg.src = newImgSrc;
        });
    });

    // Tab switching logic
    $('.product-inf a').click(function() {
        $('.product-inf li').removeClass('active');
        $(this).parent().addClass('active');

        let currentTab = $(this).attr('href');
        $('.tabs-content div').hide();
        $(currentTab).show();

        return false;
    });
});



function starsReducer(state, action) {
    switch (action.type) {
      case 'HOVER_STAR': {
        return {
          starsHover: action.value,
          starsSet: state.starsSet
        }
      }
      case 'CLICK_STAR': {
        return {
          starsHover: state.starsHover,
          starsSet: action.value
        }
      }
        break;
      default:
        return state
    }
  }

  var StarContainer = document.getElementById('rating');
  var StarComponents = StarContainer.children;

  var state = {
    starsHover: 0,
    starsSet: 4
  }

  function render(value) {
    for(var i = 0; i < StarComponents.length; i++) {
      StarComponents[i].style.fill = i < value ? '#000' : '#808080'
    }
  }

  for (var i=0; i < StarComponents.length; i++) {
    StarComponents[i].addEventListener('mouseenter', function() {
      state = starsReducer(state, {
        type: 'HOVER_STAR',
        value: this.id
      })
      render(state.starsHover);
    })

    StarComponents[i].addEventListener('click', function() {
      state = starsReducer(state, {
        type: 'CLICK_STAR',
        value: this.id
      })
      render(state.starsHover);
    })
  }

  StarContainer.addEventListener('mouseleave', function() {
    render(state.starsSet);
  })

  var review = document.getElementById('review');
  var remaining = document.getElementById('remaining');
  review.addEventListener('input', function(e) {
    review.value = (e.target.value.slice(0,999));
    remaining.innerHTML = (999-e.target.value.length);
  })

  var form = document.getElementById("review-form")

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let post = {
      stars: state.starsSet,
      review: form['review'].value,
      name: form['name'].value,
      city: form['city'].value,
      email: form['email'].value
    }

    console.log(post)
  })

  document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('submitForm').click();
  })


  $(document).ready(function(){
    $('.mega-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});;
  
//   product details