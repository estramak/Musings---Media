document.addEventListener("DOMContentLoaded", () => {
  const markers = document.querySelectorAll('.sidenote-marker');

  markers.forEach(marker => {
    const sidenote = marker.querySelector('.sidenote');
    const parent = marker.closest('p');

    if (!sidenote || !parent) return;

    const markerRect = marker.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    // Offset from top of the marker within its paragraph
    const offsetTop = markerRect.top - parentRect.top + (marker.offsetHeight / 2);

    // Set sidenote styles
    sidenote.style.position = 'absolute';
    sidenote.style.top = `${offsetTop}px`;
    sidenote.dataset.positioned = "true";

    // Compute horizontal placement based on paragraph position
    const marginBuffer = 20; // small gap between paragraph and sidenote
    const sidenoteWidth = 200;

    if (marker.dataset.side === 'left') {
      // Float left of the paragraph
      sidenote.style.left = `-${sidenoteWidth + marginBuffer}px`;
      sidenote.style.textAlign = 'right';
    } else {
      // Float right of the paragraph
      sidenote.style.left = `${parent.offsetWidth + marginBuffer}px`;
      sidenote.style.textAlign = 'left';
    }
  });
});
