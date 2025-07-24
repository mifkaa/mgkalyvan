// let intervalId;
// const sliderGoBar = document.querySelectorAll('.sliderBox .progressbar .bar .goBar');

// function startTimer() {
//   sliderGoBar.forEach(goBar => {
//     goBar.classList.add('go')
//   });

//   intervalId = setInterval(() => {
//     if (flagSlid) {
//       flagSlid = false;
//       currentIndex += 1;


//       barIndex += 1;
//       barIndexPred = barIndex - 1;


//       if (barIndex == 8) {
//         barIndex = 0;
//       }
//       if (barIndexPred == 8) {
//         barIndexPred = 0;
//       }
//       progressBars[barIndexPred].classList.remove('open')

//       progressBars[barIndex].classList.add('open')




//       sliderPart.forEach(part => {
//         if (part.offsetLeft <= 0) {
//           part.style.opacity = 0;
//           part.style.left = 3150 + 'px';

//           setTimeout(() => { part.style.opacity = 1 }, 1000)
//         }
//         else {
//           part.style.left = part.offsetLeft - parteWidth + 'px'
//         }
//       });

//       if (currentIndex == 5) {
//         currentIndex = 0;
//       }


//       setTimeout(() => { flagSlid = true }, 1000)
//     }
//   }, 3000);
// }

// function stopTimer() {
//   clearInterval(intervalId);

//   sliderGoBar.forEach(goBar => {
//     goBar.classList.remove('go')
//   });
// }

// window.addEventListener('focus', startTimer);
// window.addEventListener('blur', stopTimer);

// // Запускаем при загрузке, если окно в фокусе
// if (document.hasFocus()) {
//   startTimer();
// }







//x1.25
const body = document.querySelector('body')




const labelSpans = document.querySelectorAll('.label span');
let indexLabel = 0;

labelSpans.forEach(span => {
  indexLabel += 1;
  span.style.animation = `labelAnimation 2s ease-in-out infinite ${indexLabel * 0.15}s`;
})



const scrolldown = document.querySelector('#pageFerst .scrolldown')
scrolldown.addEventListener('click', function () {
  window.scrollTo({
    top: 500,
    behavior: 'smooth'
  })
})






const cloudBoardSpan = document.querySelector('.cloudBoard .text span')

cloudBoardSpan.addEventListener('mouseenter', function () {
  cloudBoardSpan.innerHTML = 'члены';
})

cloudBoardSpan.addEventListener('mouseleave', function () {
  cloudBoardSpan.innerHTML = 'отчеты';
})




// const slider = document.querySelector('.slider')
const sliderPart = document.querySelectorAll('.slider .part')

const slidLeft = document.querySelector('.sliderBox .slidLeft')
const slidRight = document.querySelector('.sliderBox .slidRight')

const progressBars = document.querySelectorAll('.progressbar .bar')



let currentIndex = 3; // Стартуем с центрального слайда
const parteWidth = sliderPart[0].offsetWidth + 30; // Ширина слайда + gap

let barIndex = 0;
let barIndexPred;

let flagSlid = true



const sliderBox = document.querySelector('.sliderBox');
let intervalId = null;
// let flagSlidInterval = true;

// Функция для запуска/остановки интервала
const toggleInterval = (isActive) => {
  if (isActive) {
    if (!intervalId) {
      intervalId = setInterval(() => {
        // console.log('Интервал работает!');
        slidRightFunc();
      }, 4700);
    }
  } else {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      // console.log('Интервал остановлен!');
    }
  }
};

// Intersection Observer для видимости в DOM
const observer = new IntersectionObserver((entries) => {
  toggleInterval(entries[0].isIntersecting);
}, { threshold: 0.1 });

observer.observe(sliderBox);

// Остановка интервала при сворачивании вкладки
document.addEventListener('visibilitychange', () => {
  toggleInterval(!document.hidden && sliderBox.checkVisibility());
});

// На случай, если вкладка закрывается
window.addEventListener('pagehide', () => {
  toggleInterval(false);
});





slidLeft.addEventListener('click', () => {
  if (flagSlid) {

    // slidLeft.classList.add('tap');
    // setTimeout(() => {
    //   slidLeft.classList.remove('tap');
    // }, 200)
    slidLeft.classList.add('click');
    setTimeout(() => {
      slidLeft.classList.remove('click');
    }, 200);


    flagSlid = false;
    currentIndex -= 1;

    barIndex -= 1;
    barIndexPred = barIndex + 1;


    if (barIndex == -1) {
      barIndex = 7;
    }
    if (barIndexPred == -1) {
      barIndexPred = 7;
    }
    progressBars[barIndexPred].classList.remove('open')
    progressBars[barIndex].classList.add('open')



    sliderPart.forEach(part => {
      if (part.offsetLeft >= 3150) {
        part.style.opacity = 0;
        part.style.left = 0 + 'px';

        setTimeout(() => { part.style.opacity = 1 }, 810)
      }
      else {
        part.style.left = part.offsetLeft + parteWidth + 'px'
      }
    });


    if (currentIndex == 0) {
      currentIndex = 5;
    }

    setTimeout(() => { flagSlid = true }, 810)

  }


});

slidRight.addEventListener('click', () => {

  if (flagSlid) {

    slidRight.classList.add('click');
    setTimeout(() => {
      slidRight.classList.remove('click');
    }, 200);

    // slidRight.classList.add('tap');
    // setTimeout(() => {
    //   slidRight.classList.remove('tap');
    // }, 200)


    flagSlid = false;
    currentIndex += 1;


    barIndex += 1;
    barIndexPred = barIndex - 1;


    if (barIndex == 8) {
      barIndex = 0;
    }
    if (barIndexPred == 8) {
      barIndexPred = 0;
    }
    progressBars[barIndexPred].classList.remove('open')
    progressBars[barIndex].classList.add('open')



    sliderPart.forEach(part => {
      if (part.offsetLeft <= 0) {
        part.style.opacity = 0;
        part.style.left = 3150 + 'px';

        setTimeout(() => { part.style.opacity = 1 }, 810)
      }
      else {
        part.style.left = part.offsetLeft - parteWidth + 'px'
      }
    });

    if (currentIndex == 5) {
      currentIndex = 0;
    }


    setTimeout(() => { flagSlid = true }, 810)
  }
});




function slidRightFunc() {
  if (flagSlid) {

    flagSlid = false;
    currentIndex += 1;


    barIndex += 1;
    barIndexPred = barIndex - 1;


    if (barIndex == 8) {
      barIndex = 0;
    }
    if (barIndexPred == 8) {
      barIndexPred = 0;
    }
    progressBars[barIndexPred].classList.remove('open')
    progressBars[barIndex].classList.add('open')



    sliderPart.forEach(part => {
      if (part.offsetLeft <= 0) {
        part.style.opacity = 0;
        part.style.left = 3150 + 'px';

        setTimeout(() => { part.style.opacity = 1 }, 810)
      }
      else {
        part.style.left = part.offsetLeft - parteWidth + 'px'
      }
    });

    if (currentIndex == 5) {
      currentIndex = 0;
    }


    setTimeout(() => { flagSlid = true }, 810)
  }
}





const allBox = document.querySelector('.flyScrollBlock .allBox')
const allBoxDef = document.querySelector('.flyScrollBlock .allBoxDef')
const allBoxParts = document.querySelectorAll('.flyScrollBlock .allBox .part')

const startScroll = 1700;
const endScroll = 2700;
let currentStep = null;

// Оптимизированный обработчик скролла
function handleScroll() {

  const scrollY = window.scrollY;

  if (scrollY >= endScroll - 100) {
    allBoxDef.classList.add('down');
    allBox.classList.add('down');
  }
  else {
    allBoxDef.classList.remove('down');
    allBox.classList.remove('down');
  }

  // Проверяем диапазон
  if (scrollY < startScroll || scrollY > endScroll) {
    if (currentStep !== null) {

      allBoxParts.forEach(part => {
        part.classList.remove(`fly${startScroll + currentStep}`);

      });
      currentStep = null;
    }
    return;
  }

  // Вычисляем текущий шаг (0-10)
  const newStep = Math.floor((scrollY - startScroll) / 100);

  // Если шаг изменился
  if (newStep !== currentStep) {
    // Удаляем предыдущий класс
    if (currentStep !== null) {

      allBoxParts.forEach(part => {
        part.classList.remove(`fly${startScroll + currentStep * 100}`);
      });
    }

    // Добавляем новый класс


    allBoxParts.forEach(part => {
      part.classList.add(`fly${startScroll + newStep * 100}`);

    });
    currentStep = newStep;
  }
}



// Оптимизация вызовов
let isTicking = false;
window.addEventListener('scroll', () => {
  if (!isTicking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      isTicking = false;
    });
    isTicking = true;
  }
});

// Инициализация
handleScroll();









const formCreate = document.querySelector('.formCreate form');
const nameCreate = document.getElementById('nameCreate');
const emailCreate = document.getElementById('emailCreate');
const passwordCreate = document.getElementById('passwordCreate');

formCreate.addEventListener('submit', function (e) {
  e.preventDefault();
  resetErrors();
  // formName.classList.remove('error');
  // formEmail.classList.remove('error');
  // formPassword.classList.remove('error');

  let isValid = true;

  // Валидация имени
  if (!nameCreate.value.trim()) {
    showError(nameCreate, 'nameCreate-error', 'Введите имя');
    isValid = false;
  } else if (!/^[A-Za-zА-Яа-яЁё\s\-]+$/.test(nameCreate.value)) {
    showError(nameCreate, 'nameCreate-error', 'Только буквы, пробелы и дефисы');
    isValid = false;
  }

  // Валидация email
  if (!emailCreate.value.trim()) {
    showError(emailCreate, 'emailCreate-error', 'Email не должен быть пустым');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailCreate.value)) {
    showError(emailCreate, 'emailCreate-error', 'Используйте формат example@name.com');
    isValid = false;
  }

  // Валидация пароля
  if (!passwordCreate.value) {
    showError(passwordCreate, 'passwordCreate-error', 'Введите пароль');
    isValid = false;
  } else if (!/^[\w.\-!@#$%^&*()]+$/.test(passwordCreate.value)) {
    showError(passwordCreate, 'passwordCreate-error', 'Латинские буквы, цифры и ^.-_!@#$%&*()');
    isValid = false;
  } else if (passwordCreate.value.length < 8) {
    showError(passwordCreate, 'passwordCreate-error', 'Минимум 8 символов');
    isValid = false;
  } else if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(passwordCreate.value)) {
    showError(passwordCreate, 'passwordCreate-error', 'Используйте комбинацию буквы + цифры');
    isValid = false;
  }

  // ✖ 

  if (isValid) {
    alert('Форма успешно отправлена!');
    this.submit();
  }
});

// Показать/скрыть пароль
const passwordCreateEyes = document.querySelector('#passwordCreateEyes');
passwordCreateEyes.addEventListener('click', function () {

  const password = document.getElementById('passwordCreate');
  const type = password.type === 'password' ? 'text' : 'password';
  password.type = type;

  const eyesYes = document.querySelector('#passwordCreateEyes .eyesYes');
  const eyesNo = document.querySelector('#passwordCreateEyes .eyesNo');

  eyesYes.classList.toggle('notShow')
  eyesNo.classList.toggle('notShow')
});

// Сброс ошибок
function resetErrors() {
  document.querySelectorAll('.error-message').forEach(el => {
    el.style.display = 'none';
  });
  document.querySelectorAll('input').forEach(input => {
    input.classList.remove('error');
  });
}

// Показать ошибку
function showError(input, errorId, message) {
  const errorElement = document.getElementById(errorId);
  input.classList.add('error');
  errorElement.textContent = message;
  errorElement.style.display = 'block';

  input.style.animation = 'none';
  void input.offsetWidth;
  input.style.animation = 'shake 0.5s';
}

function hideError(input, errorId) {
  const errorElement = document.getElementById(errorId);
  input.classList.remove('error');
  errorElement.style.display = 'none';
}


function showCorrect(input) {
  input.classList.add('correct');
}
function hideCorrect(input) {
  input.classList.remove('correct');
}

function showDelete(deleteId) {
  const deleteElement = document.getElementById(deleteId);

  deleteElement.style.opacity = 1;
  deleteElement.style.pointerEvents = 'auto';

}
function hideDelete(deleteId) {
  const deleteElement = document.getElementById(deleteId);

  deleteElement.style.opacity = 0;
  deleteElement.style.pointerEvents = 'none';
}





const deleteMessage = document.querySelectorAll('.delete-message');
deleteMessage.forEach(deleeteElement => {
  deleeteElement.addEventListener('click', () => {
    const input = deleeteElement.closest('.inputBox').querySelector('input');
    const error = deleeteElement.closest('.inputBox').querySelector('.error-message');

    input.style.opacity = '0';
    error.style.opacity = '0';

    deleeteElement.style.opacity = '0';
    // deleeteElement.style.pointerEvents = 'none';

    setTimeout(() => {
      input.value = '';
      input.style.opacity = '1';

      hideError(input, error.id);
      error.style.opacity = '1';

      hideDelete(deleeteElement.id)
      // deleeteElement.style.pointerEvents = 'auto';

      input.focus();
    }, 300);

  })

});



nameCreate.addEventListener('input', function () {

  const nameRegex = /^[A-Za-zА-Яа-яЁё\s\-]+$/;
  hideCorrect(this);
  showDelete('nameCreate-delete');

  if (this.value.trim() == '') {
    hideError(this, 'nameCreate-error');
    hideDelete('nameCreate-delete');
  }
  else if (!nameRegex.test(this.value.trim())) {
    showError(this, 'nameCreate-error', 'Только буквы, пробелы и дефисы');
  }
  else {
    hideError(this, 'nameCreate-error');
    showCorrect(this);
  }
});
nameCreate.addEventListener('blur', function () {
  const nameRegex = /^[A-Za-zА-Яа-яЁё\s\-]+$/;
  hideCorrect(this);
  // showDelete('nameCreate-delete');

  if (this.value.trim() == '') {
    hideError(this, 'nameCreate-error');
  }
  else if (!nameRegex.test(this.value.trim())) {
    showError(this, 'nameCreate-error', 'Только буквы, пробелы и дефисы');
  }
  else {
    hideError(this, 'nameCreate-error');
    showCorrect(this);
  }
});



emailCreate.addEventListener('input', function () {
  // const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  hideCorrect(this);
  showDelete('emailCreate-delete');

  if (this.value.trim() == '') {
    hideError(this, 'emailCreate-error');
    hideDelete('emailCreate-delete');
  }
  // else if (!nameRegex.test(this.value.trim())) {
  //   showError(this, 'email-error', 'Введите почту в формате example@name.com');
  // }
  else {
    hideError(this, 'emailCreate-error');
    showCorrect(this);

  }
});
emailCreate.addEventListener('blur', function () {
  const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  hideCorrect(this);

  if (this.value.trim() == '') {
    hideError(this, 'emailCreate-error');
  }
  else if (!nameRegex.test(this.value.trim())) {
    // showError(this, 'email-error', 'Введите почту в формате example@name.com');
    showError(this, 'emailCreate-error', 'Используйте формат example@name.com');
  }
  else {
    hideError(this, 'emailCreate-error');
    showCorrect(this);
  }
});




passwordCreate.addEventListener('input', function () {
  const nameRegex = /^[\w.\-!@#$%^&*()]+$/;
  hideCorrect(this);
  showDelete('passwordCreate-delete');

  if (this.value.trim() == '') {
    hideError(this, 'passwordCreate-error');
    hideDelete('passwordCreate-delete');
  }
  else if (!nameRegex.test(this.value.trim())) {
    showError(this, 'passwordCreate-error', 'Латинские буквы, цифры и ^.-_!@#$%&*()');
  }
  else {
    hideError(this, 'passwordCreate-error');
    showCorrect(this);
  }
});

passwordCreate.addEventListener('blur', function () {
  const nameRegex = /^[\w.\-!@#$%^&*()]+$/;
  hideCorrect(this);

  if (this.value.trim() == '') {
    hideError(this, 'passwordCreate-error');
  }
  else if (!nameRegex.test(this.value.trim())) {
    showError(this, 'passwordCreate-error', 'Латинские буквы, цифры и ^.-_!@#$%&*()');
  }
  else if (passwordCreate.value.length < 8) {
    showError(passwordCreate, 'passwordCreate-error', 'Минимум 8 символов');
  }
  else if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(passwordCreate.value)) {
    showError(passwordCreate, 'passwordCreate-error', 'Используйте комбинацию буквы + цифры');
    isValid = false;
  }
  else {
    hideError(this, 'passwordCreate-error');
    showCorrect(this);
  }
});


// const deleteMessage = document.querySelectorAll('.delete-message');
// deleteMessage.forEach(deleeteElement => {
//   deleeteElement.addEventListener('click', () => {
//     const input = deleeteElement.closest('.inputBox').querySelector('input');
//     const error = deleeteElement.closest('.inputBox').querySelector('.error-message');

//     input.style.opacity = '0';
//     error.style.opacity = '0';

//     setTimeout(() => {
//       input.value = '';
//       input.style.opacity = '1';

//       hideError(input, error.id);
//       error.style.opacity = '1';

//       hideDelete(deleeteElement.id)
//       input.focus();
//     }, 300);

//   })

// });


















const formSign = document.querySelector('.formSignIn form');
const emailSignIn = document.getElementById('emailSignIn');
const passwordSignIn = document.getElementById('passwordSignIn');

formSign.addEventListener('submit', function (e) {
  e.preventDefault();
  resetErrors();
  // formName.classList.remove('error');
  // formEmail.classList.remove('error');
  // formPassword.classList.remove('error');

  let isValid = true;

  // Валидация email
  if (!emailSignIn.value.trim()) {
    showError(emailSignIn, 'emailSignIn-error', 'Email не должен быть пустым');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailSignIn.value)) {
    showError(emailSignIn, 'emailSignIn-error', 'Используйте формат example@name.com');
    isValid = false;
  }

  // Валидация пароля
  if (!passwordSignIn.value) {
    showError(passwordSignIn, 'passwordSignIn-error', 'Введите пароль');
    isValid = false;
  } else if (!/^[\w.\-!@#$%^&*()]+$/.test(passwordSignIn.value)) {
    showError(passwordSignIn, 'passwordSignIn-error', 'Латинские буквы, цифры и ^.-_!@#$%&*()');
    isValid = false;
  } else if (passwordSignIn.value.length < 8) {
    showError(passwordSignIn, 'passwordSignIn-error', 'Минимум 8 символов');
    isValid = false;
  } else if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(passwordSignIn.value)) {
    showError(passwordSignIn, 'passwordSignIn-error', 'Используйте комбинацию буквы + цифры');
    isValid = false;
  }

  // ✖ 

  if (isValid) {
    alert('Форма успешно отправлена!');
    this.submit();
  }
});

// Показать/скрыть пароль
const passwordSignInEyes = document.querySelector('#passwordSignInEyes');
passwordSignInEyes.addEventListener('click', function () {

  const password = document.getElementById('passwordSignIn');
  const type = password.type === 'password' ? 'text' : 'password';
  password.type = type;

  const eyesYes = document.querySelector('#passwordSignInEyes .eyesYes');
  const eyesNo = document.querySelector('#passwordSignInEyes .eyesNo');

  eyesYes.classList.toggle('notShow')
  eyesNo.classList.toggle('notShow')
});




emailSignIn.addEventListener('input', function () {
  // const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  hideCorrect(this);
  showDelete('emailSignIn-delete');

  if (this.value.trim() == '') {
    hideError(this, 'emailSignIn-error');
    hideDelete('emailSignIn-delete');
  }
  // else if (!nameRegex.test(this.value.trim())) {
  //   showError(this, 'email-error', 'Введите почту в формате example@name.com');
  // }
  else {
    hideError(this, 'emailSignIn-error');
    showCorrect(this);

  }
});
emailSignIn.addEventListener('blur', function () {
  const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  hideCorrect(this);

  if (this.value.trim() == '') {
    hideError(this, 'emailSignIn-error');
  }
  else if (!nameRegex.test(this.value.trim())) {
    // showError(this, 'email-error', 'Введите почту в формате example@name.com');
    showError(this, 'emailSignIn-error', 'Используйте формат example@name.com');
  }
  else {
    hideError(this, 'emailSignIn-error');
    showCorrect(this);
  }
});




passwordSignIn.addEventListener('input', function () {
  const nameRegex = /^[\w.\-!@#$%^&*()]+$/;
  hideCorrect(this);
  showDelete('passwordSignIn-delete');

  if (this.value.trim() == '') {
    hideError(this, 'passwordSignIn-error');
    hideDelete('passwordSignIn-delete');
  }
  else if (!nameRegex.test(this.value.trim())) {
    showError(this, 'passwordSignIn-error', 'Латинские буквы, цифры и ^.-_!@#$%&*()');
  }
  else {
    hideError(this, 'passwordSignIn-error');
    showCorrect(this);
  }
});

passwordSignIn.addEventListener('blur', function () {
  const nameRegex = /^[\w.\-!@#$%^&*()]+$/;
  hideCorrect(this);

  if (this.value.trim() == '') {
    hideError(this, 'passwordSignIn-error');
  }
  else if (!nameRegex.test(this.value.trim())) {
    showError(this, 'passwordSignIn-error', 'Латинские буквы, цифры и ^.-_!@#$%&*()');
  }
  else if (passwordSignIn.value.length < 8) {
    showError(passwordSignIn, 'passwordSignIn-error', 'Минимум 8 символов');
  }
  else if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(passwordSignIn.value)) {
    showError(passwordSignIn, 'passwordSignIn-error', 'Используйте комбинацию буквы + цифры');
    isValid = false;
  }
  else {
    hideError(this, 'passwordSignIn-error');
    showCorrect(this);
  }
});






// function checkForm() {

//   const form = document.querySelector('form');

//   form.addEventListener('submit', function (event) {
//     let flag = true;
//     event.preventDefault(); // Предотвращаем отправку формы

//     // Сбрасываем сообщения об ошибках
//     // document.querySelector('.nameError').textContent = '';
//     // document.querySelector('.phoneError').textContent = '';
//     // document.querySelector('.emailError').textContent = '';

//     // Получаем значения полей
//     const name = document.querySelector('#usernameUp').value.trim();
//     // const phone = document.querySelector('#phone').value.trim();
//     const email = document.querySelector('#email').value.trim();

//     // Валидация имени
//     const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/; // Разрешает буквы, пробелы и дефисы
//     if (!nameRegex.test(name)) {
//       flag = false;
//       document.querySelector('.nameError').textContent = 'Введите корректное ИМЯ, пожалуйста.';
//     }



//     // Валидация электронной почты
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простой паттерн для почты
//     if (!emailRegex.test(email)) {
//       flag = false;
//       // document.querySelector('.emailError').textContent = 'Введите корректную электронную ПОЧТУ, пожалуйста.';
//       console.log  ('Введите корректную электронную ПОЧТУ, пожалуйста.');

//     }

//     // Если все поля валидны, можно отправить форму (например, на сервер)
//     if (flag) {
//       alert('Форма успешно отправлена!  Мы в ближайшее время свяжемся с вами)');
//       setTimeout(() => { }, 1000)
//       nameForm.value = '';
//       phoneForm.value = '';
//       emailForm.value = '';
//       // Здесь можно добавить код для отправки формы, если необходимо
//     }
//   });
// }
// checkForm()



const goBlock = document.querySelector('.registrationBlock .goBlock');
const SignInFormBlock = document.querySelector('.registrationBlock .signIn .formBlock');
const CreateAccountFormBlock = document.querySelector('.registrationBlock .createAccount .formBlock');

const SignInInfo = document.querySelector('.registrationBlock .signIn .info');
const CreateAccountInfo = document.querySelector('.registrationBlock .createAccount .info');


const SignIn = document.querySelector('.registrationBlock .signIn');
const CreateAccount = document.querySelector('.registrationBlock .createAccount');

const InfoOnSign = document.querySelector('.registrationBlock .signIn .infoCreate');
const InfoOnCreate = document.querySelector('.registrationBlock .createAccount .infoSign');

const iInfoCreate = document.querySelector('.signIn .infoCreate');
const iformSign = document.querySelector('.signIn .formSignIn');

const iformCreate = document.querySelector('.createAccount .formCreate');
const iInfoSign = document.querySelector('.createAccount .infoSign');

SignInFormBlock.classList.add('go')
CreateAccountInfo.classList.toggle('go')


function toggleForms() {
  goBlock.classList.toggle('go')
  SignInFormBlock.classList.toggle('go')
  CreateAccountFormBlock.classList.toggle('go')
  SignInInfo.classList.toggle('go')
  CreateAccountInfo.classList.toggle('go')


  // SignIn.classList.toggle('colorWhite')
  // SignIn.classList.toggle('colorMain')
  // CreateAccount.classList.toggle('colorWhite')
  // CreateAccount.classList.toggle('colorMain')

  setTimeout(() => {
    iformSign.classList.toggle('notShow')
    iformCreate.classList.toggle('notShow')

  }, 310)

  iInfoCreate.classList.toggle('notShow')
  iInfoSign.classList.toggle('notShow')
}


let flagGoBlock = true

InfoOnSign.addEventListener('click', function () {

  if (flagGoBlock) {
    flagGoBlock = false
    toggleForms();

    setTimeout(() => {
      flagGoBlock = true
    }, 1000)
  }
})
InfoOnCreate.addEventListener('click', function () {

  if (flagGoBlock) {
    flagGoBlock = false
    toggleForms();

    setTimeout(() => {
      flagGoBlock = true
    }, 1000)
  }
})













//парящий эффект
// let goFunkcFly = false
// function createProgflake() {

//   const progflake = document.createElement('div');
//   progflake.className = 'flyDownElements';
//   // прекращаем работу функции
//   if (!goFunkcFly) {
//     clearInterval();
//     return;
//   }
//   progflake.style.color = '#4f4f4f';
//   // progflake.style.zIndex = 55;


//   progflake.textContent = 'l'

//   // let iconockkaP = Math.floor(Math.random() * (7 - 1) + 1); // округление до целого Рандомный iconochka
//   // switch (iconockkaP) {
//   //   case 1: {
//   //     progflake.textContent = 'C++';
//   //     break;
//   //   }
//   //   case 2: {
//   //     progflake.textContent = 'C#';
//   //     break;
//   //   }
//   //   case 3: {
//   //     progflake.textContent = 'Python';
//   //     break;
//   //   }
//   //   case 4: {
//   //     progflake.textContent = 'Css';
//   //     break;
//   //   }
//   //   case 5: {
//   //     progflake.textContent = 'HTML';
//   //     break;
//   //   }
//   //   case 6: {
//   //     progflake.textContent = 'JS';
//   //     break;
//   //   }
//   //   default:
//   //     break;
//   // }

//   progflake.style.left = Math.random() * window.innerWidth + 'px';//рандомное пололжение относительно окна
//   progflake.style.fontSize = Math.random() * (40 - 20) + 20 + 'px'; // Рандомный размер
//   progflake.style.animationDuration = Math.random() * (0.3 - 0.2) + 0.2 + 's'; // Рандомная скорость взлета
//   document.body.append(progflake);

//   setTimeout(() => {
//     progflake.remove();
//   }, parseFloat(progflake.style.animationDuration) * 1000);//продолжительность полета
// }
// //вызов функции с определенной частотой появления слов 
// setInterval(createProgflake, 10);


















const sponsors = document.querySelector('.sponsors');
const cubesActive = document.querySelectorAll('.cubeActive');

const infoCube = document.querySelector('.infoCube');
const sponsRightBox = document.querySelector('.sponsors .rightBox');

const infoCubeTitle = document.querySelector('.infoCube .title');
const infoCubeText = document.querySelector('.infoCube .text');

cubesActive.forEach(cube => {
  let infoCubeClone;

  cube.addEventListener('mouseenter', function () {
    // добавить  курицу с тапом по активацию по ентеру и управлением стрелочкаим

    let text = cube.textContent;
    const arr = text.split(/\s+/)

    infoCubeTitle.innerHTML = arr[1];
    infoCubeText.innerHTML = text.replace(arr[1], '', 1);

    infoCubeClone = infoCube.cloneNode(true);
    sponsRightBox.appendChild(infoCubeClone);
    // sponsors.appendChild(infoCubeClone);


    infoCubeClone.style.animation = 'openInfoCube 1s ease ';
    infoCubeClone.classList.add('infoCubeOpen');


    // if (cube.classList.contains('cubeInRight')) {
    //   infoCubeClone.style.animation = 'openInfoCubeRight 1s ease ';
    //   infoCubeClone.classList.add('infoCubeOpenRight');
    // }
    // if (cube.classList.contains('cubeInLeft')) {
    //   infoCubeClone.style.animation = 'openInfoCubeLeft 1s ease ';
    //   infoCubeClone.classList.add('infoCubeOpenLeft');
    // }
  })

  cube.addEventListener('mouseleave', function () {


    infoCubeClone.classList.remove('infoCubeOpen');
    infoCubeClone.classList.add('infoCubeClose');
    uwu(infoCubeClone);


    // if (cube.classList.contains('cubeInRight')) {
    //   infoCubeClone.classList.remove('infoCubeOpenRight');
    //   infoCubeClone.classList.add('infoCubeCloseRight');
    //   uwu(infoCubeClone);
    // }
    // if (cube.classList.contains('cubeInLeft')) {
    //   infoCubeClone.classList.remove('infoCubeOpenLeft');
    //   infoCubeClone.classList.add('infoCubeCloseLeft');
    //   uwu(infoCubeClone);
    // }
  })

  function uwu(infoCubeClone) {
    setTimeout(() => { infoCubeClone.remove() }, 1000)
  }

})






//проверка на ошибки при перенаправлении на внешний ресурс
const blocking = document.querySelector('#blocking');

document.addEventListener('DOMContentLoaded', function () {

  const fallbackUrl = 'error.html'; // Ваша страница 404
  const loader = document.querySelector('.loader');

  cubesActive.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      link.classList.add('selected');
      blocking.style.display = 'block';
      body.style.overflow = 'hidden';


      const url = this.dataset.url;
      loader.style.display = 'block';

      // Создаём скрытый iframe для проверки
      const testFrame = document.createElement('iframe');
      testFrame.style.display = 'none';
      testFrame.src = url;
      document.body.appendChild(testFrame);

      let isWorking = false; // Флаг "рабочий ли сайт"
      const timeout = 4400; // 4 секунды на проверку

      // Если iframe загрузился успешно
      testFrame.onload = () => {

        setTimeout(() => {
          isWorking = true;
          cleanup();
          loader.style.display = 'none';
          link.classList.remove('selected');
          blocking.style.display = 'none';
          body.style.overflow = 'auto';

          window.open(url, '_blank'); // Открываем сайт
        }, 1300) // для более красивой загрузки сайта
      };

      // Если iframe не загрузился (ошибка или блокировка)
      testFrame.onerror = () => {
        cleanup();
        // Проверяем, был ли iframe заблокирован (например, Сбербанк)
        setTimeout(() => {
          try {
            // Пытаемся получить доступ к iframe (если заблокирован — будет ошибка)
            const frameDoc = testFrame.contentDocument || testFrame.contentWindow.document;
            // Если дошли сюда — iframe загружен, но контент невидим (например, 404 внутри iframe)
            if (!isWorking) {
              loader.style.display = 'none';
              link.classList.remove('selected');
              blocking.style.display = 'none';

              window.location.href = fallbackUrl;
            }
          } catch (e) {
            loader.style.display = 'none';
            link.classList.remove('selected');
            blocking.style.display = 'none';

            // Если iframe заблокирован (Сбербанк и т.д.) — считаем, что сайт рабочий
            window.open(url, '_blank');
          }
        }, 100);
      };

      // Таймер на случай, если iframe вообще не ответил
      setTimeout(() => {
        if (!isWorking) {
          cleanup();
          loader.style.display = 'none';
          link.classList.remove('selected');
          blocking.style.display = 'none';

          window.location.href = fallbackUrl;
        }
      }, timeout);

      // Удаляем iframe после проверки
      function cleanup() {
        document.body.removeChild(testFrame);
      }
    });
  });
});





// const observerVis = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visibleOne');

//       // Добавляем задержку для последовательного появления
//       const index = Array.from(items).indexOf(entry.target);
//       entry.target.style.transitionDelay = `${index * 0.1} s`;
//     }
//   });
// }, {
//   threshold: 0.1,
//   rootMargin: '0px 0px -50px 0px'
// });

// const items = document.querySelectorAll('#pageMain .grid > div');

// items.forEach((item) => {
//   item.classList.add('viss');
// })

// items.forEach((item, index) => {
//   //   progflake.className = 'flyDownElements';

//   item.style.transitionDelay = `${index * 0.1} s`;
//   observerVis.observe(item);
// });



// document.querySelectorAll('#pageMain .grid > div').forEach(item => {
//   // 1. Получаем текущий transform
//   const computedStyle = window.getComputedStyle(item);
//   const originalTransform = computedStyle.transform;

//   // 2. Проверяем, есть ли реальный transform (не матрица по умолчанию)
//   const hasCustomTransform = 
//     originalTransform !== 'none' && 
//     originalTransform !== 'matrix(1, 0, 0, 1, 0, 0)';

//   // 3. Добавляем анимацию появления
//   item.style.transform = 
//     `${hasCustomTransform ? originalTransform + ' ' : ''}translateY(30px);`
//   item.style.opacity = '0';
//   item.style.transition = 'transform 0.5s ease, opacity 0.5s ease';

//   // 4. Наблюдаем за появлением
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.transform = hasCustomTransform ? originalTransform : 'none';
//         entry.target.style.opacity = '1';
//       }
//     });
//   }, { threshold: 0.1 });

//   observer.observe(item);
// });




const forgotPasswordBut = document.querySelector('.forgotPasswordBut')
const blockForgotPassword = document.querySelector('.blockForgotPassword')

forgotPasswordBut.addEventListener('click', function () {

  blockForgotPassword.classList.toggle('notShow')
  body.style.overflow = 'hidden';
})


const exitMaxForgotPassword = document.querySelector('.blockForgotPassword .exitMax')
exitMaxForgotPassword.addEventListener('click', function () {

  blockForgotPassword.classList.toggle('notShow')
  body.style.overflow = 'auto';
})

exitMaxForgotPassword.addEventListener('mouseenter', function () {

  exitForgotPassword.classList.add('mouseenter');
})
exitMaxForgotPassword.addEventListener('mouseleave', function () {

  exitForgotPassword.classList.remove('mouseenter');
})




const exitForgotPassword = document.querySelector('.blockForgotPassword .exit')
exitForgotPassword.addEventListener('click', function () {

  blockForgotPassword.classList.toggle('notShow')
  body.style.overflow = 'auto';
})


const formForgot = document.querySelector('.formForgot form');
const emailForgot = document.querySelector('#emailForgot');

formForgot.addEventListener('submit', function (e) {
  e.preventDefault();
  resetErrors();

  let isValid = true;

  // Валидация email
  if (!emailForgot.value.trim()) {
    showError(emailForgot, 'emailForgot-error', 'Email не должен быть пустым');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailForgot.value)) {
    showError(emailForgot, 'emailForgot-error', 'Используйте формат example@name.com');
    isValid = false;
  }

  if (isValid) {
    alert('Форма успешно отправлена!');
    this.submit();
  }
});




emailForgot.addEventListener('input', function () {
  // const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  hideCorrect(this);
  showDelete('emailForgot-delete');

  if (this.value.trim() == '') {
    hideError(this, 'emailForgot-error');
    hideDelete('emailForgot-delete');
  }
  // else if (!nameRegex.test(this.value.trim())) {
  //   showError(this, 'email-error', 'Введите почту в формате example@name.com');
  // }
  else {
    hideError(this, 'emailForgot-error');
    showCorrect(this);

  }
});
emailForgot.addEventListener('blur', function () {
  const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  hideCorrect(this);

  if (this.value.trim() == '') {
    hideError(this, 'emailForgot-error');
  }
  else if (!nameRegex.test(this.value.trim())) {
    // showError(this, 'email-error', 'Введите почту в формате example@name.com');
    showError(this, 'emailForgot-error', 'Используйте формат example@name.com');
  }
  else {
    hideError(this, 'emailForgot-error');
    showCorrect(this);
  }
});






const goOnTop = document.querySelector('.goOnTop');
const fillGo = document.querySelector('.goOnTop .fillGo');
const topPersent = document.querySelector('.goOnTop .percent');
const goOnTopSvg = document.querySelector('.goOnTop .svgIcon');

window.addEventListener('scroll', function () {
  const scrollHeight = document.documentElement.scrollHeight;
  // console.log(window.scrollY)
  const clientHeight = document.documentElement.clientHeight;
  const scrollableHeight = scrollHeight - clientHeight;
  const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;

  if (Math.round(scrolledPercentage) >= 30) {
    goOnTop.classList.remove('notShow');
  }
  else {
    goOnTop.classList.add('notShow');
  }
  // console.log(`Проскроллено ${Math.round(scrolledPercentage)}% страницы`);
  fillGo.style.height = 58 / 100 * Math.round(scrolledPercentage) + 'px';
  topPersent.textContent = Math.round(scrolledPercentage);

  if (Math.round(scrolledPercentage) == 100) {
    topPersent.classList.add('none')
    goOnTopSvg.classList.add('up')
    goOnTop.classList.add('up')
  }
  else {
    topPersent.classList.remove('none')
    goOnTopSvg.classList.remove('up')
    goOnTop.classList.remove('up')
  }
});

let flagScrollTop = true
goOnTop.addEventListener('click', function () {
  if (flagScrollTop) {
    flagScrollTop = false
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    goOnTopSvg.classList.add('go')

    setTimeout(() => {
      flagScrollTop = true
      goOnTopSvg.classList.remove('go')
    }, 1100)
  }
})











document.querySelectorAll('#pageMain .grid > div').forEach(item => {
  const originalTransform = window.getComputedStyle(item).transform;
  if (originalTransform === 'none') {
    item.style.transform = 'translateY(30px)';
  }

  // Начальное состояние (появление снизу)
  item.style.transform = `${originalTransform} translateY(30px)`;
  if (!item.classList.contains('kubeBlock')) {
    item.style.opacity = '0';
  }
  item.style.transition = 'transform 0.7s ease, opacity 0.7s ease, box-shadow 0.7s ease';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Возвращаем только исходный transform (без translateY)
        entry.target.style.transform = originalTransform;
        entry.target.style.opacity = '1';
      }
    }, { threshold: 0.1 });
  });

  observer.observe(item);
});