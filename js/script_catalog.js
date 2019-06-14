var actionBuy = document.querySelectorAll(".catalog-item__action-buy");
var modalCart = document.querySelector(".modal__product-in-cart");
var closeCart = modalCart.querySelector(".modal-close");

for (var i = 0; i<=actionBuy.length; i++){
    actionBuy[i].addEventListener( "click", function (evt) {
        evt.preventDefault();
        modalCart.classList.add("modal-show");
    });

    closeCart.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalCart.classList.remove("modal-show");
    });

    window.addEventListener ("keydown", function (evt) {
        if (evt.keyCode === 27){
            evt.preventDefault();
            if (modalCart.classList.contains("modal-show")){
                modalCart.classList.remove("modal-show");
            }
        }
    });
}