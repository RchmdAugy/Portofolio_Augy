// Data proyek contoh
const projects = [
  {
    title: "Aplikasi Kasir Sederhana",
    description: "Aplikasi web kasir berbasis HTML, CSS, dan JavaScript untuk UMKM.",
    link: "#"
  },
  {
    title: "Website Profil Kampus",
    description: "Website statis untuk profil kampus dengan tampilan modern dan responsif.",
    link: "#"
  },
  {
    title: "Sistem Manajemen Data Mahasiswa",
    description: "CRUD data mahasiswa menggunakan JavaScript dan SQL (simulasi).",
    link: "#"
  }
];

function renderProjects() {
  const projectList = document.getElementById('project-list');
  projectList.innerHTML = '';
  projects.forEach(proj => {
    const el = document.createElement('div');
    el.className = 'bg-gray-900 p-6 rounded shadow hover:shadow-lg transition';
    el.innerHTML = `
      <h3 class="text-xl font-bold mb-2">${proj.title}</h3>
      <p class="text-gray-400 mb-4">${proj.description}</p>
      <a href="${proj.link}" class="text-blue-400 hover:underline" target="_blank">Lihat Proyek</a>
    `;
    projectList.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  // Handle form kontak
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-message');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    msg.classList.remove('hidden');
    form.reset();
    setTimeout(() => msg.classList.add('hidden'), 3000);
  });
}); 