const igniteButton = document.getElementById("ignite-sequence");
const stabilizeButton = document.getElementById("stabilize-core");
const hologram = document.querySelector(".display__hologram");
const frame = document.querySelector(".hologram__frame");

const igniteSequence = () => {
  hologram.dataset.glow = "intense";
  frame.classList.add("glow-trace");
  createEnergonPulse();
};

const stabilizeCore = () => {
  hologram.dataset.glow = "stable";
  frame.classList.remove("glow-trace");
};

function createEnergonPulse() {
  const pulse = document.createElement("div");
  pulse.className = "energon-pulse";
  hologram.appendChild(pulse);

  requestAnimationFrame(() => {
    pulse.classList.add("energon-pulse--active");
  });

  pulse.addEventListener("animationend", () => {
    pulse.remove();
  });
}

function startupAnimation() {
  hologram.dataset.glow = "intense";
  frame.classList.add("glow-trace");

  setTimeout(() => {
    frame.classList.remove("glow-trace");
    hologram.dataset.glow = "stable";
  }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  igniteButton?.addEventListener("click", igniteSequence);
  stabilizeButton?.addEventListener("click", stabilizeCore);
  startupAnimation();
});
