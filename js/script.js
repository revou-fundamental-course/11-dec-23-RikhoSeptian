window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("stiky", window.scrollY > 0);
});

const data = document.querySelector('#data');
const nama = document.querySelector('#nama');
const alamat = document.querySelector('#alamat');
const jk = document.querySelector('#jk');
const pesan = document.querySelector('#pesan');

function tampil() {
    data.innerHTML = `
    <p>Current Time : <span>Fri jun 17 2022 11:27:28 GMT+0100</span></p>
    <p>Nama Lengkap : ${nama.value}</p><br>
    <p>Alamat : ${alamat.value}</p><br>
    <p>Jenis Kelamit : ${jk.value}</p><br>
    <p>Pesan : ${pesan.value}</p><br> `;
}