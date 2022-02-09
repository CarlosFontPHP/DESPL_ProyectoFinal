/* Calcularemos el resumen del pedido dependiendo de la cantidad de productos, el precio, si es premium o no y los costes de envio.
Tambien controlaremos la cantidad de productos en el carrito y si hay o no productos*/

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

    // Menú hamburguesa en vista movil

    $(".fa-bars").click(function () {
        $(".menu").fadeToggle();
    });

    $(".cesta .f2 td:nth-child(7)").click(function () {
        // Servira para quitar los productos
        $(".f2").remove();
        total();

    });

    $(".cesta .f3 td:nth-child(7)").click(function () {
        $(".f3").remove();
        total();

    });


    $(".noexists").hide();

    $(document).scroll(function () {
        // Para que aparezca la flecha cuando se haga scroll hacia abajo
        if ($(this).scrollTop() > 0) {
            $('#totop').fadeIn(500);
        } else {
            $('#totop').fadeOut(500);
        }
    });
    $('#totop').click(function () {
        //Si picamos en la flecha nos lleva al principio del documento
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

});


