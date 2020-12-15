anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1200,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: [0,1],
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100
  });

