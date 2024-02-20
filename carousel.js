const images = [
    // Add your image URLs here
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
    "image12.jpg",
    "image13.jpg",
    "image14.jpg",
    "image15.jpg",
    "image16.jpg",
    
    "image17.jpg"
];

const itemsPerPage = 3;
let currentPage = 1;

const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImages(page) {
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const visibleImages = images.slice(startIdx, endIdx);
    console.log(visibleImages);
    
    carousel.innerHTML = visibleImages.map(imgSrc => (
        `<div class="w-full  p-2">
            <img src="${imgSrc}" alt="Image" class="w-full h-auto">
        </div>`
    )).join('');
}

function updateButtons() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === Math.ceil(images.length / itemsPerPage);
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        showImages(currentPage);
        updateButtons();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(images.length / itemsPerPage)) {
        currentPage++;
        showImages(currentPage);
        updateButtons();
    }
});

// Initial setup
showImages(currentPage);
updateButtons();
