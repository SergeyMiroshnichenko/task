var btns = document.querySelectorAll('.btn_users')

btns.forEach(function(btn) {

  btn.addEventListener('click', function() {

    btn.classList.toggle("active");
    btn.innerHTML =
    (btn.innerHTML === 'Inactive') ? btn.innerHTML = 'Active' : btn.innerHTML = 'Inactive';
  })
})

