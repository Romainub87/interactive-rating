

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