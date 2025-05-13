function updateHeaderOffset() {
    const headerBar = document.querySelector('.header_bar_fix');
        const secondaryBar = document.querySelector('.box_header_secondary_bar');
        if (headerBar && secondaryBar) {
            const height = headerBar.offsetHeight;
            secondaryBar.style.marginTop = height + 'px';
        }
}
    
    window.addEventListener('resize', updateHeaderOffset);
    window.addEventListener('load', updateHeaderOffset);

    document.addEventListener("DOMContentLoaded", function () {
        const body = document.getElementById("body");
        const contrastOptions = document.querySelectorAll("li.contrast span");
    
        contrastOptions.forEach((option) => {
            option.addEventListener("click", function () {
                body.classList.remove("contrast-op-1", "contrast-op-2", "contrast-op-3", "contrast-op-4");
                const match = this.className.match(/con_op_(\d)/);
                if (match) {
                    const contrastClass = `contrast-op-${match[1]}`;
                    body.classList.add(contrastClass);
                }
            });
        });
    });
    

// icon_white
document.addEventListener("DOMContentLoaded", () => {
  function updateIcons() {
    const contrastClass = [...document.body.classList].find(c => c.startsWith('contrast-op-'));
    const isHighContrast = ['contrast-op-2', 'contrast-op-4'].includes(contrastClass);

    document.querySelectorAll("img").forEach(img => {
      const src = img.getAttribute("src");
      if (!src) return;

      const parts = src.split("/");
      const folder = parts[1];
      const filename = parts.pop();
      const [name, ext] = filename.split(/(?=\.\w+$)/);

      let newFolder, newFilename;

      switch (folder) {
        case "navigation_icon":
        case "navigation_icon_white":
          const navBase = name.replace(/_white$/, "");
          newFolder = isHighContrast ? "navigation_icon_white" : "navigation_icon";
          newFilename = isHighContrast ? `${navBase}_white${ext}` : `${navBase}${ext}`;
          break;

        case "promoted_icons":
        case "promoted_icons_white":
          const promoBase = name.replace(/_white$/, "");
          newFolder = isHighContrast ? "promoted_icons_white" : "promoted_icons";
          newFilename = isHighContrast ? `${promoBase}_white${ext}` : `${promoBase}${ext}`;
          break;

        case "social_media_icons":
        case "social_media_icons_white":
          const socialBase = name.replace(/_white$/, "");
          newFolder = isHighContrast ? "social_media_icons_white" : "social_media_icons";
          newFilename = isHighContrast ? `${socialBase}_white${ext}` : `${socialBase}${ext}`;
          break;

        case "buttom":
        case "buttom_white":
          const btnBase = name.replace(/_white$/, "");
          newFolder = "buttom"; 
          newFilename = isHighContrast ? `${btnBase}_white${ext}` : `${btnBase}${ext}`;
          break;

        default:
        return; 
      }

      const newSrc = `/${newFolder}/${newFilename}`;
      if (img.getAttribute("src") !== newSrc) {
        img.setAttribute("src", newSrc);
      }
    });
  }

  updateIcons();

  const observer = new MutationObserver(() => updateIcons());
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});


//**слайдер */

const sliderLine = document.querySelector('.slider-line');
const sliderImages = document.querySelectorAll('.slider-line img');
const prevButton = document.querySelector('.button-previous');
const nextButton = document.querySelector('.button-next');
const sliderDots = document.querySelectorAll('.slider-dot');

let index = 0;
let slideWidth = sliderImages[0].clientWidth;

// === Обновление положения слайда ===
function updateSlidePosition() {
  sliderLine.style.transform = `translateX(-${index * slideWidth}px)`;
  updateDots();
  updateButtons();
}

// === Обновление точек ===
function updateDots() {
  const contrastClass = [...document.body.classList].find(c => c.startsWith('contrast-op-'));
  const isHighContrast = ['contrast-op-2', 'contrast-op-4'].includes(contrastClass);

  sliderDots.forEach((dot, i) => {
    const baseName = i === index ? "ellipse-active" : "ellipse";
    const contrastSuffix = isHighContrast ? "_white" : "";
    dot.src = `/buttom/${baseName}${contrastSuffix}.svg`;
    dot.setAttribute("aria-current", i === index ? "true" : "false");
  });
}


// === Обновление стрелок ===
function updateButtons() {
  prevButton.style.display = index === 0 ? "none" : "block";
  nextButton.style.display = index === sliderImages.length - 1 ? "none" : "block";
}

// === Навешиваем клики на стрелки ===
nextButton.addEventListener('click', () => {
  if (index < sliderImages.length - 1) {
    index++;
    updateSlidePosition();
  }
});

prevButton.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlidePosition();
  }
});

// === Навешиваем клики на точки ===
sliderDots.forEach(dot => {
  dot.addEventListener('click', () => {
    index = parseInt(dot.dataset.index);
    updateSlidePosition();
  });
});

// === Адаптация при изменении размера окна ===
window.addEventListener('resize', () => {
  slideWidth = sliderImages[0].clientWidth;
  updateSlidePosition();
});

// === Инициализация ===
updateSlidePosition();
