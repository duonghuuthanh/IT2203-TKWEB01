$(document).ready(() => {
    $("#btnThem").click(() => {
        let name = $("#colorId").val();
        $(".buttons").append(`
            <div><input type="button" style="background-color:${name}"></div>
        `);
    });

    $(".rdo input[type=radio]").click(function() {
        let idx = $(this).attr("rel");
        $(".shape > svg").hide();
        $(".shape > svg").eq(idx).show();
    });

    $(".buttons").on("click", "input[type=button]", function() {
        let color = $(this).css("background-color");
        $(".shape svg :first-child").attr("fill", color);
    });

    // $(".buttons input[type=button]").click(function() {
    //     let color = $(this).css("background-color");
    //     $(".shape svg :first-child").attr("fill", color);
    // });

    let colors = ["gold", "yellow", "brown", "palegreen", "peru", "pink", "plum"];
    $("#colorId").keyup(function() {
        let t = $(this).val();

        let h = "";
        for (let c of colors)
            if (c.indexOf(t) >= 0)
                h += `<li><a href="javascript:;">${c}</a></li>`;
        
        $("#suggest").html(h);
    });

    $("#suggest").on("click", "a", function() {
        let t = $(this).text();
        $("#colorId").val(t);
        $("#suggest").html("");
    });
});