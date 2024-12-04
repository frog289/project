const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращение отправки формы

  // Валидация пароля (простая проверка длины)
  const password = passwordInput.value;
  if (password.length < 8) {
    passwordError.textContent = 'Пароль должен быть не менее 8 символов';
    return;
  }
  passwordError.textContent = ''; // Очистка сообщения об ошибке

  // Сохранение данных, если флажок "Запомнить меня" установлен
  if (rememberMeCheckbox.checked) {
    localStorage.setItem('username', usernameInput.value);
    localStorage.setItem('password', passwordInput.value);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  // Здесь можно добавить логику обработки успешного входа
  alert('Вы вошли!');
});


// Автоматическое заполнение формы при загрузке страницы
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');
if (savedUsername && savedPassword) {
  usernameInput.value = savedUsername;
  passwordInput.value = savedPassword;
  rememberMeCheckbox.checked = true;
}