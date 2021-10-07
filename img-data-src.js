
function fixImages() {
    Array.from(document.images).forEach( (img) => {
        if (img.hasAttribute("data-src")) {
            var newSrc = img.getAttribute("data-src");
            if (img.src != newSrc) {
                img.src = newSrc;
            }
        }
    } );
}

document.addEventListener('DOMContentLoaded', fixImages);
