// Variabel untuk menyimpan pengaduan
let pengaduan = [];

// Fungsi untuk menambahkan pengaduan
function tambahPengaduan(nama, email, pengaduan) {
    pengaduan.push({ nama, email, pengaduan });
    tampilkanPengaduan();
}

// Fungsi untuk menampilkan pengaduan
function tampilkanPengaduan() {
    const daftarPengaduan = document.getElementById('daftar-pengaduan');
    daftarPengaduan.innerHTML = '';
    pengaduan.forEach((pengaduan, index) => {
        const html = `
            <div>
                <h3>${pengaduan.nama}</h