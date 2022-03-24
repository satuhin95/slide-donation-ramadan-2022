let pp_wrapper = document.querySelector(".pp_wrapper"),
    handMove = document.querySelector(".pp_box_1_hand"),
    pp_box_1 = document.querySelector(".pp_box_1"),
    dust_img = document.querySelector(".pp_box_1_dust .dust_img"),
    pp_box_2 = document.querySelector(".pp_box_2"),
    box_2_text = document.querySelector(".pp_box_2_text"),
    pp_box_2_2 = document.querySelector(".pp_box_2_2"),
    pp_product = document.querySelector(".pp_box_2_product");
function dragElement(e) {
    var t = 0,
        o = 0;
    function n(e) {
        (e = e || window.event).preventDefault(), (o = e.clientX), (document.onmousemove = p), (document.onmouseup = d);
    }
    function p(n) {
        (n = n || window.event).preventDefault(), (t = o - n.clientX), (o = n.clientX), (leftSpace = e.offsetLeft - t), draggedResult(e, leftSpace);
    }
    function d() {
        (document.onmouseup = null), (document.onmousemove = null);
    }
    document.getElementById(e.id + "header") ? (document.getElementById(e.id + "header").onmousedown = n) : (e.onmousedown = n);
}
function dragElementMobile(e) {
    var t = 0,
        o = 0;
    function n(e) {
        e.preventDefault(), (e = e.touches[0] || window.event), (o = e.clientX), (document.ontouchmove = p);
    }
    function p(n) {
        (n = n.touches[0] || window.event), (t = o - n.clientX), (o = n.clientX), (leftSpace = e.offsetLeft - t), draggedResult(e, leftSpace);
    }
    document.getElementById(e.id + "header") ? (document.getElementById(e.id + "header").ontouchstart = n) : (e.ontouchstart = n);
}
function draggedResult(e, t) {
    t > 130 && slide_2_show(), t < 1 && (t = 0), t > 160 && (t = 160), (dust_img.style.clipPath = `polygon(${t + 130}px 0, 100% 0, 100% 100%, ${t + 130}px 100%)`), (e.style.left = t + "px");
}
function slide_2_show() {
    pp_box_1.classList ? pp_box_1.classList.add("hidden") : (pp_box_1.className += " hidden"),
        (pp_box_2.className = pp_box_2.className.replace("hidden", "")),
        box_2_text.classList ? box_2_text.classList.add("popin") : (box_2_text.className += " popin"),
        setTimeout(function () {
            pp_box_2_2.classList ? pp_box_2_2.classList.add("popin") : (pp_box_2_2.className += " popin"), (pp_product.className = pp_product.className.replace("hidden", ""));
        }, 100),
        setTimeout(function () {
            pp_product.classList ? pp_product.classList.add("bottle") : (pp_product.className += " bottle");
        }, 1e3);
}
void 0 !== window.orientation ? dragElementMobile(handMove) : dragElement(handMove);
