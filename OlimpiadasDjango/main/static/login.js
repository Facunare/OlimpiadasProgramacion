$(".inputs").on("focus", function (e) {
    $(`label[for='${e.currentTarget.id}']`).addClass("labelActive");
  });
  $(".inputs").on("blur", function (e) {
    if (e.currentTarget.value == "") {
      $(`label[for='${e.currentTarget.id}']`).removeClass("labelActive");
    }
  });
  $(".togglePassword").on("click", (e) => {
    $(e.currentTarget.offsetParent.children[0]).attr(
      "type",
      $(e.currentTarget.offsetParent.children[0]).attr("type") == "text"
        ? "password"
        : "text"
    );
    if ($(e.currentTarget.offsetParent.children[0]).attr("type") == "text"){
      $(e.currentTarget.offsetParent.children[2]).addClass("hidden")
      $(e.currentTarget.offsetParent.children[3]).removeClass("hidden")
    }else{
      $(e.currentTarget.offsetParent.children[2]).removeClass("hidden")
      $(e.currentTarget.offsetParent.children[3]).addClass("hidden")
    }
  });
  
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
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
          distance: 150,
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