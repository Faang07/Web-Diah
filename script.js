// script.js (Contoh sederhana untuk menambahkan interaksi)
// Misalnya, menambahkan efek hover pada tombol
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.backgroundColor = '#0056b3'; // Warna biru lebih gelap saat hover
    ctaButton.style.color = 'white';
});

ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.backgroundColor = 'white';
    ctaButton.style.color = '#007bff';
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle class "active" pada menu
    menuToggle.classList.toggle('active');
});

