$(document).ready(() => {
    $("#btnDoiTien").click(() => {
        if ($("#stId").val() === "") {
            $("#stId").toggleClass("error");
            return;
        }

        let st = parseFloat($("#stId").val());
        let dv = $("#dvId").val();

        let k = "Kết quả tại đây...";
        switch (dv) {
            case "usd":
                break;
        }

        $("#kq").html(`<h2>${k}</h2>`);
    });

    $(".tab a").click(function() {
        $(".tab > li").removeClass("active");
        $(this).parent().addClass("active");

        $(".tab-content > div").hide();

        let h = $(this).attr("href");
        $(h).slideDown("slow");
    });

    let num = $(".slider-content > div").length;
    let h = "";
    for (let i = 0; i < num; i++)
        h += `
            <button class="digit">${i + 1}</button>
        `;

    $(".slider-button :first-child").after(h);

    $(".slider-content").height($(".slider-content img").height() + 5);


    let current = -1;
    let showSlider = (current) => {
        $(".slider-content > div").slideUp("slow");
        $(".slider-content > div").eq(current).slideDown("slow");

        $("button.digit").removeClass("active");
        $("button.digit").eq(current).addClass("active");
    }

    $("button.digit").click(function() {
        current = parseInt($(this).text()) - 1;

        showSlider(current)
    });

    $(".next").click(function() {
        current++;
        if (current === num)
            current = 0;
        showSlider(current);

        clearInterval(timer);
        runSlider();
    });
    $(".prev").click(function() {
        current--;
        if (current < 0)
            current = num - 1;
        showSlider(current);
    });

    let timer = null;
    let runSlider = () => {
        timer = setInterval(() => {
            $(".next").click();
        }, 2000);
    }
    runSlider();
});