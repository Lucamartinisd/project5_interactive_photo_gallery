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
        Search Box Functions
======================================================================== */
const picSearch = document.getElementById('picSearch');
picSearch.addEventListener('keyup', e => {

    let currentValue = e.target.value.toLowerCase();
    let captions = document.querySelectorAll('a[data-caption]');
    captions.forEach(caption => {
      
        if (caption.dataset.caption.toLowerCase().includes(currentValue)) {
            caption.style.display = 'block';
        } else {
            caption.style.display = 'none';
        }
    })
});
