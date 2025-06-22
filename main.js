// Data proyek (tidak ada perubahan)
const projects = [
  {
    title: "Sistem Pencatatan Keuangan Sedehana Berbasis VBA Excel Pada UMKM Biofor Maggot",
    description: "Sistem ini dibuat untuk membantu UMKM Biofor Maggot dalam mencatat keuangan mereka secara sederhana dan efisien. Dengan menggunakan VBA Excel, sistem ini memungkinkan pengguna untuk memasukkan data transaksi, menghasilkan laporan keuangan, dan memantau arus kas dengan mudah.",
    link: "#",
    image: "img/maggot.png",
    stack: ["VBA", "Excel"]
  },
  {
    title: "Sistem Informasi Pemesanan Toko Bunga dan Buket (Florist) Berbasis Website",
    description: "Website ini dibuat untuk memfasilitasi transaksi jual-beli tanpa pertemuan langsung antara penjual dan pelanggan, pelanggan dapat melakukan pesanan sesuai pilihan dan keinginannya dengan adanya sistem kustomisasi. Hal ini bertujuan untuk meningkatkan kemudahan dan efesiensi dalam kegiatan bisnis.",
    link: "#",
    image: "img/florist.png",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  },
  {
    title: "Website Marketplace BANGKIT (Belanja UMKM Subang kreatif, inovatif dan Komplit)",
    description: "Website ini merupakan marketplace yang dirancang untuk memfasilitasi transaksi jual-beli produk UMKM di Subang. Dengan fitur-fitur seperti katalog produk, keranjang belanja, dan sistem pembayaran online, website ini bertujuan untuk mendukung pertumbuhan ekonomi lokal.",
    link: "#",
    image: "img/bangkit.png",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Laravel"]
  }
];

function renderProjects() {
  const projectList = document.getElementById('project-list');
  if (!projectList) return;

  projectList.innerHTML = '';
  projects.forEach((proj, i) => {
    const el = document.createElement('div');
    // Menerapkan kelas glass-card dan gaya lainnya
    el.className = 'glass-card p-6 flex flex-col items-center text-center';
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', String(i * 100));
    
    el.innerHTML = `
      <img src="${proj.image}" alt="Ikon Proyek ${proj.title}" class="w-full h-48 object-cover rounded-xl mb-6 shadow-lg">
      <h3 class="text-xl font-bold mb-2 text-white">${proj.title}</h3>
      <p class="text-slate-400 mb-4 text-sm flex-grow">${proj.description}</p>
      <div class="flex flex-wrap gap-2 justify-center mb-6">
        ${proj.stack.map(s => `<span class='bg-slate-700 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300'>${s}</span>`).join('')}
      </div>
    `;
    projectList.appendChild(el);
  });
}

// Event listener setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  
  // --- KODE BARU UNTUK HAMBURGER MENU ---
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburgerButton && mobileMenu) {
    hamburgerButton.addEventListener('click', () => {
      // Toggle class 'hidden' pada menu mobile
      mobileMenu.classList.toggle('hidden');
    });
  }
  // --- AKHIR KODE BARU ---

  // Kode yang sudah ada sebelumnya
  renderProjects();

//   const form = document.getElementById('contact-form');
//   const msg = document.getElementById('form-message');

//   if (form) {
//     form.addEventListener('submit', function(e) {
//       e.preventDefault();
      
//       if (msg) {
//         msg.classList.remove('hidden');
//       }
      
//       form.reset();
      
//       setTimeout(() => {
//         if (msg) {
//           msg.classList.add('hidden');
//         }
//       }, 4000);
//     });
//   }
});