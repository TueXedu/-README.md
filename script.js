const botaoCurtida = document.querySelector(".post-actions button");

let curtido = false;

botaoCurtida.addEventListener("click", function () {
    curtido = !curtido;

    if (curtido) {
        botaoCurtida.textContent = "❤️";
        botaoCurtida.style.color = "red";
    } else {
        botaoCurtida.textContent = "🤍";
        botaoCurtida.style.color = "black";
    }
});
