$(document).ready(function () {
  //mobile menu
  $("#menu-toggle").click(function () {
    $("#mobileMenu").toggleClass("active");
    const icon = $("#menu-icon");
    icon.toggleClass("fa-bars fa-xmark");
  });

  //aro dekun button functionality
  $("#aro-dekun-btn").click(function () {
    let hiddenCard = $(".d-none");
    console.log(hiddenCard);
    const showCard = 3;

    for (let i = 0; i <= showCard && i < hiddenCard.length; i++) {
      $(hiddenCard[i]).removeClass("d-none");
    }

    if ($(".d-none").length === 0) {
      $("#aro-dekun-btn").addClass("d-none");
    }
  });

  // iframe video
  $("#play-btn").click(function () {
    $("#video").attr(
      "src",
      "https://www.youtube.com/embed/5GKzR0rjFvM?si=TCBZWBl2KxsajE2e"
    );
    $("#thumbnail").addClass("d-none");
    $("#play-btn").addClass("d-none");
  });

  // countdown
  let counted = false;

  $(window).on("scroll", function () {
    const counterTop = $(".row.mt-5").offset().top - window.innerHeight + 100;

    console.log(counterTop);
    if (!counted && $(window).scrollTop() > counterTop) {
      counted = true;

      const duration = 2000;
      const startTime = performance.now();

      $(".counter").each(function () {
        const $this = $(this);
        const target = parseInt($this.data("target"));

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentValue = Math.floor(progress * target);
          $this.text(currentValue + "+");

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            $this.text(target + "+");
          }
        }

        requestAnimationFrame(update);
      });
    }
  });
  $(window).trigger("scroll");
});
