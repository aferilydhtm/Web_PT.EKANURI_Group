function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}