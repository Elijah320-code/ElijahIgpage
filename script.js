document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const imagePaths = [
        '01-pumpkin.jpg',
        'image_123650291 (4).JPG',
        'Guitar_picks-KayEss-1.jpeg'
        // Add more image paths as needed
    ];

    imagePaths.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = "Elijah’s Instagram Image";
        img.classList.add('gallery-img');
        gallery.appendChild(img);
    });

    // Get the theme toggle button element
    const themeToggle = document.getElementById('theme-toggle');

    // Add click event listener to the theme toggle button
    themeToggle.addEventListener('click', () => {
        // Toggle between light and dark themes
        document.body.classList.toggle('dark-theme');
    });
});
