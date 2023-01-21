let $encadreThank = $(".encadre-thank");
let $encadre = $(".encadre");
let $rate = $('.rate');
let $alert = $(".alert");
let $chiffre = $(".chiffre");


// Animation hover notes 
$(".chiffre").hover(function () {
        // over
        $(this).css({
            "background-color": "hsl(25, 97%, 53%)",
            "color": "white",
            "cursor": "pointer",
        });
        $(this).prev(".chiffre").css({
            "background-color": "hsl(216, 12%, 54%)",
            "color": "white",
        });
        $(this).next(".chiffre").css({
            "background-color": "hsl(216, 12%, 54%)",
            "color": "white",
        });
        
    }, function () {
        // out
        $(this).css({
            "background-color": "hsl(212, 21%, 24%)",
            "color": "hsl(216, 12%, 54%)",
        });
        $(this).prev(".chiffre").css({
            "background-color": "hsl(212, 21%, 24%)",
            "color": "hsl(216, 12%, 54%)",
        });
        $(this).next(".chiffre").css({
            "background-color": "hsl(212, 21%, 24%)",
            "color": "hsl(216, 12%, 54%)",
        });
    }
);

// Etat initial
$alert.hide();
$encadreThank.hide();

// Choix de la note
let valueRate = 0;
$chiffre.on("click", function () {
    valueRate = $(this).html();
});

// Affichage encadre-thank
$(".submit").on("click", function () {
    if (valueRate != 0) {
        $encadreThank.toggle();
        $encadre.toggle();
        $rate.text(valueRate);
    } else {
        $alert.show();
    }
   
});

