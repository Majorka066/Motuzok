// Переключение между светлой и тёмной темами
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
  document.documentElement.classList.toggle('light-theme');
  themeBtn.textContent =
    document.documentElement.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Прокрутка к секциям
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});
