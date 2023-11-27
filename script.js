window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("denis_navbar").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        document.getElementById("denis_dropdown").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        document.getElementById("denis_navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("denis_dropdown").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    
}

// slideshow otomatis
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("denis_mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000); 
}



/* kontak */


function addEntry() {
    var email = document.getElementById("denis_email").value;
    var name = document.getElementById("denis_name").value;
    var message = document.getElementById("denis_message").value;

    if (email.trim() === "" || name.trim() === "" || message.trim() === "") {
        alert("Email, nama, dan pesan harus diisi");
        return;
    }

    // ketika email tidak valid
    if (!isValidEmail(email)) {
        alert("Format email tidak valid");
        return;
    }

    var entry = document.createElement("p");
    entry.innerHTML = "<strong>" + email + " (" + name + "):</strong> " + message;

    document.getElementById("denis_hasil").appendChild(entry);

    // hasil
    document.getElementById("denis_email").value = "";
    document.getElementById("denis_name").value = "";
    document.getElementById("denis_message").value = "";
}

function isValidEmail(email) {
    // validasi email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/* pengumuman.js */
document.addEventListener("DOMContentLoaded", function () {
   
    const announcements = document.querySelectorAll('.denis_isi_pengumuman');

    announcements.forEach(function (announcement) {
        const image = announcement.querySelector('img');
        
    
        const paragraph = announcement.querySelector('p');

    
        image.style.display = 'none';
        paragraph.style.display = 'none';


        announcement.addEventListener('click', function () {

            if (image.style.display === 'none') {
                image.style.display = 'block';
                paragraph.style.display = 'block';
            } else {
                image.style.display = 'none';
                paragraph.style.display = 'none';
            }
        });
    });
});

/* fakultas */

function toggleProgramList(facultyCard) {
    const programList = facultyCard.querySelector('.denis_program_list');
    programList.style.display = programList.style.display === 'none' ? 'block' : 'none';
}
