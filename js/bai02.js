function loadCates() {
    fetch("data/categories.json").then(res => res.json()).then(data => {
        let h = "";
        for (let c of data) {
            h += `<li><a href="#">${c.name}</a></li>`;
        }

        // Cách 1
        // let e = document.getElementById("menu");
        // e.innerHTML += h;

        // Cách 2
        let e = document.querySelector("#menu :first-child");
        e.insertAdjacentHTML("afterend", h);
    })
}

function loadProducts() {
    fetch("data/products.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data) {
            h += `
            <div class="product">
                <div>
                    <div><img src="images/${p.image}" alt="iPhone" /></div>
                    <h3>${p.name}</h3>
                    <p>${p.price} VNĐ</p>
                    <a href="javascript:;" class="del">&times;</a>
                </div>
            </div>
            `;
        }

        let e = document.getElementById("products");
        e.innerHTML = h;

        // gắn sự kiện xóa sp
        let buttons = document.getElementsByClassName("del");
        for (let b of buttons)
        b.addEventListener("click", function() {
            if (confirm("Bạn chắc chắn xóa không?") === true)
                this.parentNode.parentNode.remove();
        });
    })
}

window.onload = function() {
    loadCates();
    loadProducts();  
    
    let k = document.getElementById("kw");
    k.addEventListener("blur", function() {
        if (this.value === "")
            this.classList.toggle("error");
    })

    let m = document.getElementById("menu");
    let b = document.querySelector(".show-nav");
    b.onclick = function() {
        m.style.left = "0";
        m.style.right = "50%";
    }

    let close = document.querySelector("#menu li:last-child a");
    close.onclick = function() {
        m.style.left = "-100%";
        m.style.right = "unset";
    }
}