$(document).ready(function() {
    $(function() {
        $("#header").load("./header.html");
        // Handle Newsletter form Footer
        $("#footer").load("./footer.html", function() {
            $('#newsletter').submit(function(e) {
                e.preventDefault();
        
                alert("We will contact you shortly!!");
            });
        });
    });

    //Handle Form in Contact page
    $('#contact').submit(function(e) {
        e.preventDefault();

        var name = $('input[name="name"]').val();
        var email = $('input[name="email"]').val();
        var message = $('textarea').val();

        alert(`
            Name: ${name}
            Email: ${email}
            Message: ${message}`);
    });

    // Filter Price in Shop page
    $('input[type="range"]').on('input', function () {
        var price = $(this).val();
        $('.change-range').html(price);
        $('.product > div > div > span:nth-child(2)').each(function() {
            var itemPrice = parseFloat($(this).text().substring(1));
            if(price < itemPrice) {
                $(this).parent().parent().css('display', 'none');
            } else {
                $(this).parent().parent().css('display', 'block');
            }
        });
    });

    // Tab Navigation in Product Item page
    $('.product-item section:nth-child(2) div:first-child a:first-child').addClass('open');
    $('.product-item section:nth-child(2) .addition-information').addClass('open');
    $('.product-item section:nth-child(2) div:first-child a').each(function() {
        $(this).click(function() {
            if($(this).text() == 'Addition information') {
                $('.product-item section:nth-child(2) div:first-child a:first-child').addClass('open');
                $('.product-item section:nth-child(2) .addition-information').addClass('open');

                $('.product-item section:nth-child(2) div:first-child a:last-child').removeClass('open');
                $('.product-item section:nth-child(2) .classification').removeClass('open');
            } else if ($(this).text() == 'Classification') {
                $('.product-item section:nth-child(2) div:first-child a:last-child').addClass('open');
                $('.product-item section:nth-child(2) .classification').addClass('open');

                $('.product-item section:nth-child(2) div:first-child a:first-child').removeClass('open');
                $('.product-item section:nth-child(2) .addition-information').removeClass('open');
            }
        })
    })
});