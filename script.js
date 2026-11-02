// Mobile navigation
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}


// Synchronized multimodal controls
const syncVideos = [
  ...document.querySelectorAll("#synthetic-data .sync-video")
];

document.getElementById("play-all")?.addEventListener("click", () => {
  if (!syncVideos.length) return;

  const targetTime = syncVideos[0].currentTime;
  syncVideos.forEach((video) => {
    if (Math.abs(video.currentTime - targetTime) > 0.08) {
      video.currentTime = targetTime;
    }
    video.play().catch(() => {});
  });
});

document.getElementById("pause-all")?.addEventListener("click", () => {
  syncVideos.forEach((video) => video.pause());
});

document.getElementById("restart-all")?.addEventListener("click", () => {
  syncVideos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
});

// Depth Estimation synchronized video controls
const depthVideos = [
  ...document.querySelectorAll("#depth video")
];

document.getElementById("depth-play-all")?.addEventListener("click", () => {
  if (!depthVideos.length) return;

  const targetTime = depthVideos[0].currentTime;

  depthVideos.forEach((video) => {
    if (Math.abs(video.currentTime - targetTime) > 0.08) {
      video.currentTime = targetTime;
    }
    video.play().catch(console.error);
  });
});

document.getElementById("depth-pause-all")?.addEventListener("click", () => {
  depthVideos.forEach((video) => video.pause());
});

document.getElementById("depth-restart-all")?.addEventListener("click", () => {
  depthVideos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
    video.play().catch(console.error);
  });
});

// Keep synthetic-data videos approximately synchronized when one is scrubbed.
syncVideos.forEach((video) => {
  video.addEventListener("seeked", () => {
    const t = video.currentTime;
    syncVideos.forEach((other) => {
      if (other !== video && Math.abs(other.currentTime - t) > 0.12) {
        other.currentTime = t;
      }
    });
  });
});


// Copy BibTeX
document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.querySelector(button.dataset.copyTarget);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.innerText);
      const oldText = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = oldText;
      }, 1400);
    } catch (error) {
      console.error("Could not copy citation:", error);
    }
  });
});
