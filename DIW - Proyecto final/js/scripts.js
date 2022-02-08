function total() {

    var suma = 0;
    var costes = 1.99;
    var pcmax = 10;
    var cantidad = 0;
    $(".cesta tr").each(function () {
        if (!$(this).hasClass("f1")) {
            suma += parseFloat($(this).find(".price").text());
            cantidad++;
        }

    });
    if (cantidad == 0) {
        $(".noexists").text("No hay productos en tu carrito.");
    }

    if (!suma == 0) {
        if ($("#cbox1").is(':checked')) {

            preciofinal = (suma + pcmax).toFixed(2);
            $(".max").text("Pc max añadido al carrito correctamente +10€");
            $(".gastos_envio").text("Gastos de envio eliminados -1,99€");



        } else {
            preciofinal = (suma + costes).toFixed(2);
            $(".max").text("");
            $(".gastos_envio").text("");

        }
    } else {
        preciofinal = 0;
        $(".max").text("");
        $(".gastos_envio").text("");
    }

    $(".totalfinal").text(preciofinal);
    $(".ncart").text(cantidad);
    $(".noexists").show();


}
$(document).ready(function () {
    total();
    $(".fa-bars").click(function () {
        $(".menu").fadeToggle();
    });

    $(".cesta .f2 td:nth-child(7)").click(function () {
        $(".f2").remove();
        total();

    });

    $(".cesta .f3 td:nth-child(7)").click(function () {
        $(".f3").remove();
        total();

    });

    $(".noexists").hide();

    $(document).scroll(function () {

        if ($(this).scrollTop() > 0) {
            $('#totop').fadeIn(500);
        } else {
            $('#totop').fadeOut(500);
        }
    });
    $('#totop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

});


