/* eslint-disable prettier/prettier */
import "../styles/IcbZoomImage.css";

const getDescription = (imgId: string) => {
  switch (imgId) {
  case "image-1":
    return "Photo 1 description.";
  case "image-2":
    return "Photo 2 description.";
  case "image-3":
    return "Photo 3 description.";
  case "image-4":
    return "Photo 4 description.";
  case "image-5":
    return "Photo 5 description.";
  case "image-6":
    return "Photo 6 description.";
  case "image-7":
    return "Photo 7 description.";
  case "image-8":
    return "Photo 8 description.";
  default:
    return "Description not available.";
  }
};

const zoomImage = (imgElement: HTMLImageElement, imgId: string) => {
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
    const originalParent = document.querySelector(`[data-img-id="${imgId}"]`);
    if (originalParent) {
      originalParent.appendChild(imgElement);
    }
  };
  overlay.onkeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      document.body.removeChild(overlay);
      const originalParent = document.querySelector(`[data-img-id="${imgId}"]`);
      if (originalParent) {
        originalParent.appendChild(imgElement);
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

  const photoContainerZoom = document.createElement("div");
  photoContainerZoom.className = "photo-container-zoom";

  const textBox = document.createElement("div");
  textBox.className = "text-box";
  textBox.innerHTML = `<p>${getDescription(imgId)}</p>`;

  const clone = imgElement.cloneNode(true) as HTMLImageElement;
  clone.className = "zoomed-photo";

  photoContainerZoom.appendChild(clone);
  zoomedPhotoContainer.appendChild(photoContainerZoom);
  zoomedPhotoContainer.appendChild(textBox);
  overlay.appendChild(zoomedPhotoContainer);

  document.body.appendChild(overlay);
};

export default zoomImage;
