import "../styles/IcbZoomImage.css";

const getDescription = (src: string) => {
  if (src.includes("picture1")) {
    return "Photo 1 description.";
  }
  if (src.includes("picture2")) {
    return "Photo 2 description.";
  }
  if (src.includes("picture3")) {
    return "Photo 3 description.";
  }
  if (src.includes("picture4")) {
    return "Photo 4 description.";
  }
  if (src.includes("picture5")) {
    return "Photo 5 description.";
  }
  if (src.includes("picture6")) {
    return "Photo 6 description.";
  }
  if (src.includes("picture7")) {
    return "Photo 7 description.";
  }
  if (src.includes("picture8")) {
    return "Photo 8 description.";
  }
  return "Description not available.";
};

const zoomImage = (imgElement: HTMLImageElement | null) => {
  if (!imgElement) {
    console.error("Image element not found");
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.tabIndex = 0;
  overlay.role = "button";
  overlay.ariaLabel = "Close zoomed image";
  overlay.onclick = () => {
    document.body.removeChild(overlay);
    const originalParent = document.querySelector(
      `[data-img-id="${imgElement.dataset.imgId}"]`,
    );
    if (originalParent) {
      originalParent.appendChild(imgElement);
      const clone = imgElement.cloneNode(true) as HTMLImageElement;
      clone.style.position = "";
      clone.style.zIndex = "";
      clone.style.width = "";
      clone.style.height = "";
      clone.style.top = "";
      clone.style.left = "";
      clone.style.transform = "";
    }
  };
  overlay.onkeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      document.body.removeChild(overlay);
      const originalParent = document.querySelector(
        `[data-img-id="${imgElement.dataset.imgId}"]`,
      );
      if (originalParent) {
        originalParent.appendChild(imgElement);
        const clone = imgElement.cloneNode(true) as HTMLImageElement;
        clone.style.position = "";
        clone.style.zIndex = "";
        clone.style.width = "";
        clone.style.height = "";
        clone.style.top = "";
        clone.style.left = "";
        clone.style.transform = "";
      }
    }
  };

  const zoomedPhotoContainer = document.createElement("div");
  zoomedPhotoContainer.className = "zoomed-photo-container";
  zoomedPhotoContainer.tabIndex = 0;
  zoomedPhotoContainer.role = "button";
  zoomedPhotoContainer.ariaLabel = "Zoomed image container";
  zoomedPhotoContainer.onclick = (e) => e.stopPropagation();
  zoomedPhotoContainer.onkeydown = (e) => e.stopPropagation();

  const textBox = document.createElement("div");
  textBox.className = "text-box";
  textBox.innerHTML = `<p>${getDescription(imgElement.src)}</p>`;

  const clone = imgElement.cloneNode(true) as HTMLImageElement;
  clone.style.position = "fixed";
  clone.style.zIndex = "1001";
  clone.style.width = "40%";
  clone.style.height = "auto";
  clone.style.top = "50%";
  clone.style.left = "50%";
  clone.style.transform = "translate(-50%, -50%)";

  zoomedPhotoContainer.appendChild(clone);
  zoomedPhotoContainer.appendChild(textBox);
  overlay.appendChild(zoomedPhotoContainer);

  document.body.appendChild(overlay);
};

export default zoomImage;
