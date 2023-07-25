function validate(ele) {
    if (ele.value === "") {
        ele.classList.remove("error");
        setTimeout(() => ele.classList.add("error"), 5);
        return true;
    }

    return false;
}

function giaiBac1() {
    let a = document.getElementById("aId");
    let b = document.getElementById("bId");
    let c = document.getElementById("cId");

    if (a !== null && b !== null && c !== null) {
        if (validate(a) === true || validate(b) === true || validate(c) === true)
            return;

        a = parseFloat(a.value);
        b = parseFloat(b.value);
        c = parseFloat(c.value);

        // Biện luận
        let k = "Kết quả tại đây..."
        if (a == 0) {
            // biện luận bx + c = 0
        } else {
            // tính delta
        }

        let d = document.getElementById("kq");
        d.innerHTML = `<h2 style="color:red">${k}</h2>`;
    }
}

function doiTien() {
    let st = document.getElementById("stId");
    let dv = document.getElementById("dvId");
    if (st !== null && dv !== null) {
        if (validate(st) === true || validate(dv) === true)
            return;

        st = parseFloat(st.value);
        dv = dv.value;

        let k;
        switch (dv) {
            case "usd":
                k = st/22000;
                break;
            case "eur":
                k = st/26000;
                break;
            case "aud":
                k = st/16000
                break;
        }

        let d = document.getElementById("kq2");
        d.innerHTML = `${st} VNĐ = ${k.toFixed(2)} ${dv.toUpperCase()}`;
    }
}

window.onload = function() {
    let images = document.querySelectorAll(".thumb img");
    for (let im of images)
        im.onmousemove = function() {
            let d = document.getElementById("main");
            d.src = this.src;
        }

    let buttons = document.querySelectorAll(".btn button");
    for (let b of buttons)
        b.onclick = function() {
            let c = this.getAttribute("rel");
            let d = document.getElementById("main");
            d.src = `images/galaxys8/${c}_1.jpg`;

            for (let i = 0; i < images.length; i++)
                images[i].src = `images/galaxys8/${c}_${i+1}.jpg`;
        }

}