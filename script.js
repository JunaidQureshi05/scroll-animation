const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes();
function checkBoxes() {
  const trigger_bottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger_bottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
