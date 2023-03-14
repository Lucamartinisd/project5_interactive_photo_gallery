window.addEventListener('load', function() {
    baguetteBox.run('.gallery', {
        animation: 'fadeIn',
        buttons: true,
    }
    );
});

const pSearch = document.getElementById('search');
pSearch.addEventListener('keyup', x => {

    let searchValue = x.target.value.toLowerCase();
    console.log(searchValue);
    let captions = document.querySelectorAll('a[data-caption]');
    console.log(captions);

    captions.forEach(caption => {
      
        if (caption.dataset.caption.toLowerCase().includes(searchValue)) {
            caption.style.display = 'block';
        } else {
            caption.style.display = 'none';
        }
    })
});

const search = new Filter('search', 'data-caption');