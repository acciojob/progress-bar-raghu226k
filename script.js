//your JS code here. If required.
<script>
  const progress = document.getElementById('progress');
  const circles = document.querySelectorAll('.circle');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let currentActive = 1;

  next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
      currentActive = circles.length;
    }
    update();
  });

  prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
      currentActive = 1;
    }
    update();
  });

  function update() {
    circles.forEach((circle, idx) => {
      if (idx < currentActive) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

    const activeCircles = document.querySelectorAll('.circle.active').length;
    const totalSteps = circles.length - 1;
    const progressWidth = (activeCircles - 1) / totalSteps * 100;
    progress.style.width = progressWidth + '%';

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
  }
</script>
