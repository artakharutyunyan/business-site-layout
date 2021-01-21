jQuery(document).ready(() => {
  const h = $('.heading').height();
  $(window).scroll(function () {
    if ($(this).scrollTop() > h) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });

  $('.slider-heading .wrapper-slides').fractionSlider({
    speedOut: 1000,
    slideTransitionSpeed: 1000,
    slideEndAnimation: true,
  });

  $('.sub-menu-item').hover(function () {
    if ($(window).width() > 768) {
      if ($(this).children('.drop-down-menu').css('display') == 'block') {
        $(this).children('.drop-down-menu').removeClass('show');
      } else {
        $(this).children('.drop-down-menu').addClass('show');
      }
    }
  });

  $('#mobileMenuBtn').on('click', function () {
    $('#mobileMenuBtn').toggleClass('close');
    $('nav').toggleClass('translate-menu');
  });

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 34,
        density: {
          enable: true,
          value_area: 631.3181133058181,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#939393',
        },
        polygon: {
          nb_sides: 4,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.4,
          sync: false,
        },
      },
      size: {
        value: 7.891476416322726,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#dcdcdc',
        opacity: 0.2367442924896818,
        width: 1.5782952832645454,
      },
      move: {
        enable: true,
        speed: 1.3,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'bounce',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 789.1476416322727,
          rotateY: 315.65905665290904,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
        },
        onclick: {
          enable: true,
          mode: 'remove',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.2714664122011815,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});

if (document.getElementById('typed-strings')) {
  new Typed('.typed', {
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    loopCount: 'infinite',
    stringsElement: document.getElementById('typed-strings'),
  });
}
