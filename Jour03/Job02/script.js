$(document).ready(function() {
    const arcEnCiel = $('#arc-en-ciel');
    const message = $('#message');
    const melangerButton = $('#melanger');
    arcEnCiel.children().css('margin-right', '2px');
    let startX = 0;
    let startY = 0;
    let victoireAtteinte = false;

    function melangerImages() {
        const images = arcEnCiel.children();
        for (let i = images.length - 1; i >= 0; i--) {
            arcEnCiel.append(images.eq(Math.floor(Math.random() * i)).detach());
        }
        arcEnCiel.children().css('margin-right', '2px');
        arcEnCiel.children().removeClass('dragging');
        message.text('');
        victoireAtteinte = false;
    }

    function verifierOrdre() {
        const images = arcEnCiel.children();
        const imagesDansLeBonOrdre = images.get().every((img, index) => parseInt(img.alt.slice(6)) === index + 1);
        if (imagesDansLeBonOrdre) {
            message.text('Vous avez gagné !').css('color', 'green');
            arcEnCiel.children().css('margin-right', '0px');
            victoireAtteinte = true;
        } else {
            message.text('Vous avez perdu !').css('color', 'red');
        }
    }

    arcEnCiel.on('mousedown', 'img', function(event) {
        if (!victoireAtteinte) {
            startX = event.clientX;
            startY = event.clientY;
            arcEnCiel.children().removeClass('dragging');
            $(this).addClass('dragging');
        }
    });

    arcEnCiel.on('mouseup', 'img', function(event) {
        if (!victoireAtteinte) {
            $(event.target).removeClass('dragging');
            verifierOrdre();
        }
    });

    arcEnCiel.on('dragover', function(event) {
        event.preventDefault();
    });

    arcEnCiel.on('drop', 'img', function(event) {
        event.preventDefault();
        if (!victoireAtteinte) {
            const droppedImg = $('.dragging');
            const targetImg = $(this);
            const targetIndex = targetImg.index();
            const sourceIndex = droppedImg.index();
            if (sourceIndex !== targetIndex) {
                if (sourceIndex < targetIndex) {
                    targetImg.after(droppedImg);
                } else {
                    targetImg.before(droppedImg);
                }
                verifierOrdre();
            }
            droppedImg.removeClass('dragging');
        }
    });
    melangerButton.click(melangerImages);
});
