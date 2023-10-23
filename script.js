// event mouse
document.getElementById("btn").addEventListener("mouseenter", function () {
  alert("Ke Warung Kita");
});

// event keyboard
document.getElementById("key").addEventListener("keypress", function (event) {
  document.getElementById("key_2").innerText = "Nugas Kita Ke Lab";
});

// event change = terjadi ketika sesuatu berubah
document.getElementById("warna").addEventListener("change", function () {
  document.getElementById("key_2").style.color =
    document.getElementById("warna").value;
});
