
function removeAds() {
    for (div of Array.from(document.getElementsByTagName('div')))
        if (div.className.startsWith("AdvertisingSlot"))
            div.parentNode.removeChild(div);
}

document.addEventListener('DOMContentLoaded', removeAds);
