$(document).ready(function() {
    $(function() {
        $("#header").load("./header.html");
        $("#footer").load("./footer.html", function() {
            $('#newsletter').submit(function(e) {
                e.preventDefault();
        
                alert("We will contact you shortly!!");
            });
        });
    });

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
});