// docs/js/fireworks.js
document.addEventListener('DOMContentLoaded', () => {
    // 先检查库是否加载成功
    if (window.firework) {  
      firework({
        excludeElements: ["a"],
        particles: [
          {
            shape: "star",
            move: ["emit","rotate"],
            easing: "easeOutExpo",
            colors: [
              "rgba(233, 48, 168, 0.9)",
              "rgba(250,227,217,.9)",
              "rgba(39, 196, 52, 0.9)",
              "rgb(75, 197, 208)",
            ],
            number: 30,
            duration: [2400, 3600],
            shapeOptions: {
              radius: [16, 32],
              alpha: [0.7,0.9],
              spikes: 5,
            },
          },
        ],
      });
    } else {
      console.error('错误！ mouse-firework 库未加载！');
    }
  });
// https://github.com/D-Sketon/mouse-firework