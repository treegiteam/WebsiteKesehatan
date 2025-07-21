
const navbarNav = document.querySelector
  ('.navbar-nav');

document.querySelector('#mmenu').
  onclick = () => {
    navbarNav.classList.toggle('active');
  };

const omenu = document.querySelector('#mmenu');

document.addEventListener('click', function (e) {
  if (!omenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Terima kasih atas konsultasi Anda, " + name + "!");
      document.querySelector("form").reset();
    } else {
      alert("Mohon lengkapi semua kolom.");
    }
  }


});
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-width');
    const barTop = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (barTop < windowHeight) {
      bar.style.width = targetWidth + '%';
    }
  });
}

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

