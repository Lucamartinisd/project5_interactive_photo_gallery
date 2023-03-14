/* ======================================================================
        Baguette
======================================================================== */
window.addEventListener('load', function() {
    baguetteBox.run('.gallery', {
        animation: 'fadeIn',
        buttons: true,
    }
    );
});

/* ======================================================================
        picSearch Box Functions
======================================================================== */
const picSearch = document.getElementById('picSearch');
picSearch.addEventListener('keyup', x => {

    let currentValue = x.target.value.toLowerCase();
    console.log(currentValue);
    let captions = document.querySelectorAll('a[data-caption]');
    console.log(captions);

    captions.forEach(caption => {
      
        if (caption.dataset.caption.toLowerCase().includes(currentValue)) {
            caption.style.display = 'block';
        } else {
            caption.style.display = 'none';
        }
    })
});

const search = new Filter('search', 'data-caption');
