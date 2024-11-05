document.addEventListener("DOMContentLoaded", function () {
  // Initialize only the first 6 articles to be visible by default
  document.querySelectorAll(".blog-container").forEach((container) => {
    const posts = container.querySelectorAll(".blog-post");
    posts.forEach((post, index) => {
      if (index >= 5) {
        post.classList.add("extra-post"); // Mark as initially hidden
        post.style.display = "none"; // Hide posts beyond the sixth
      }
    });
  });
});

function toggleExtraPosts(button) {
  const section = button.closest(".blog-category");
  const extraPosts = section.querySelectorAll(".blog-post.extra-post");
  let isExpanded = button.classList.contains("expanded");
  const postsToShow = 6; // Number of posts to show per batch

  if (isExpanded) {
    // Collapse all extra posts back to hidden with faster fade-out
    extraPosts.forEach(post => fadeOut(post, 200)); // Faster fade-out
    button.textContent = "Leggi tutti gli articoli";
    button.classList.remove("expanded");
  } else {
    // Show the next batch of hidden posts with slower fade-in
    let postsRevealed = 0;
    extraPosts.forEach(post => {
      if (post.style.display === "none" && postsRevealed < postsToShow) {
        fadeIn(post, 500); // Slower fade-in
        postsRevealed++;
      }
    });

    // Check if there are any more hidden posts
    const hiddenPosts = Array.from(extraPosts).filter(post => post.style.display === "none");
    if (hiddenPosts.length === 0) {
      button.textContent = "Mostra meno articoli";
      button.classList.add("expanded");
    }
  }
}

// Fade-in function (similar to jQuery's fadeIn)
function fadeIn(element, duration) {
  element.style.opacity = 0;
  element.style.display = "block";
  
  let start = null;
  function animateFadeIn(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = Math.min(progress / duration, 1);
    element.style.opacity = opacity;
    if (progress < duration) {
      requestAnimationFrame(animateFadeIn);
    }
  }
  requestAnimationFrame(animateFadeIn);
}

// Fade-out function (similar to jQuery's fadeOut)
function fadeOut(element, duration) {
  let start = null;
  function animateFadeOut(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = Math.max(1 - progress / duration, 0);
    element.style.opacity = opacity;
    if (progress < duration) {
      requestAnimationFrame(animateFadeOut);
    } else {
      element.style.display = "none";
    }
  }
  requestAnimationFrame(animateFadeOut);
}
