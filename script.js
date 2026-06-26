// Smooth animation on scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Animated statistics counter

const counters = document.querySelectorAll(".stats h3");

const startCounter = (counter) => {
  const target = counter.innerText.replace(/\D/g, "");
  let count = 0;

  const updateCounter = () => {
    const increment = target / 100;

    if (count < target) {
      count += increment;
      counter.innerText =
        Math.ceil(count) +
        (counter.innerText.includes("%")
          ? "%"
          : counter.innerText.includes("+")
          ? "+"
          : "");
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText =
        target +
        (counter.innerText.includes("%")
          ? "%"
          : counter.innerText.includes("+")
          ? "+"
          : "");
    }
  };

  updateCounter();
};

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
});

counters.forEach((counter) => {
  statObserver.observe(counter);
});

// Header background on scroll

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "#002c69";
    header.style.transition = "0.3s";
  } else {
    header.style.background = "#003b8e";
  }
});

// Fade-in effect for sections

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  sectionObserver.observe(section);
});

// Active navigation highlight

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

console.log("EZESjnr Engineering Consult Website Loaded Successfully");
