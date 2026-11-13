const slides = document.querySelectorAll(".slide");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
const contador = document.getElementById("contador");
let actual = 0;

function mostrar(n) {
  slides[actual].classList.remove("activa");
  actual = n;
  slides[actual].classList.add("activa");
  contador.textContent = (actual + 1) + " / " + slides.length;
  btnAnterior.disabled = actual === 0;
  btnSiguiente.disabled = actual === slides.length - 1;
}

btnAnterior.onclick  = () => mostrar(actual - 1);
btnSiguiente.onclick = () => mostrar(actual + 1);

// También con las flechas del teclado
document.onkeydown = (e) => {
  if (e.key === "ArrowLeft" && actual > 0) mostrar(actual - 1);
  if (e.key === "ArrowRight" && actual < slides.length - 1) mostrar(actual + 1);
};

mostrar(0);