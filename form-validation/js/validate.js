(function() {
	"use strict";
	var validCheckbox = false;
	var validEmail = false;
	var validPassword = false;
	var validPhone = true;
	var nodeEmail = document.querySelector('#email');
	var nodePassword = document.querySelector('#password');
	var nodePhone = document.querySelector('#phone');
	var nodeCheckbox = document.querySelector('.checkbox');
	var sendButton = document.querySelector('.btn, .btn-primary');
	var keyupTimeout;
	var errorNode;
	submitButton();

	//Проверка поля почта
	nodeEmail.addEventListener('keyup', checkEmail, false);
	nodeEmail.addEventListener('blur', checkEmail, false);

	function checkEmail(event) {
		deleteError(nodeEmail.parentNode);
		clearTimeout(keyupTimeout);
		keyupTimeout = setTimeout(function() {
			if (!/.+@.+\..+/i.test(nodeEmail.value)) {
				showError(nodeEmail.parentNode, 'Ошибка в email-е. Проверьте наличие символа @ и домена');
				validEmail = false;
			} else {
				var request = new XMLHttpRequest();
				var STATE_READY = 4;
				request.open('get', 'https://aqueous-reaches-8130.herokuapp.com/check-email/?email=' + encodeURIComponent(nodeEmail.value), true);
				request.onreadystatechange = function(response) {
					if (request.readyState === STATE_READY) {
						if (JSON.parse(request.responseText).used) {
							showError(nodeEmail.parentNode, 'Такой email уже занят');
							validEmail = false;
						} else {
							deleteError(nodeEmail.parentNode);
							validEmail = true;
						}
					}
				};
				request.send();
			}
			if (nodeEmail.value.length === 0) {
				deleteError(nodeEmail.parentNode);
			}
			submitButton();
		}, 500);
	}


	//Проверка поля пароль
	nodePassword.onkeyup = function(event) {
		clearTimeout(keyupTimeout);
		keyupTimeout = setTimeout(function() {
			deleteError(nodePassword.parentNode);
			if (nodePassword.value.length < 5) {
				showError(nodePassword.parentNode, 'Пароль слишком короток (введите не меньше 5 символов)');
				validPassword = false;
			} else if (!/^[a-zA-Z0-9_-]+$/.test(nodePassword.value)) {
				showError(nodePassword.parentNode, 'Пароль содержит запрещенные символы.Разрешенные - латинские буквы, цифры, символы - , _');
				validPassword = false;
			} else if (/^\d+$/.test(nodePassword.value)) {
				showError(nodePassword.parentNode, 'Простой пароль. Добавьте латинские буквы или разрешенные символы - , _');
				validPassword = false;
			} else if (/^[a-zA-Z]+$/.test(nodePassword.value)) {
				showError(nodePassword.parentNode, 'Простой пароль. Добавьте цифры или разрешенные символы - , _');
				validPassword = false;
			} else {
				deleteError(nodePassword.parentNode);
				validPassword = true;
			}
			if (nodePassword.value.length === 0) {
				deleteError(nodePassword.parentNode);
			}
			submitButton();
		}, 500);
	};

	//Проверка поля телефон
	nodePhone.addEventListener('keyup', checkPhone, false);
	nodePhone.addEventListener('blur', checkPhone, false);

	function checkPhone(event) {
		clearTimeout(keyupTimeout);
		keyupTimeout = setTimeout(function() {
			if (!/^\+\d{12}$/.test(nodePhone.value)) {
				validPhone = false;
				showError(nodePhone.parentNode, 'Неправильно введен номер. Оставьте поле пустым или введите номер в формате +380509993322');
			} else {
				validPhone = true;
				deleteError(nodePhone.parentNode);
			}
			if (nodePhone.value.length === 0) {
				validPhone = true;
				deleteError(nodePhone.parentNode);
			}
			submitButton();
		}, 500);
	}

	//Проверка чекбокса согласия со всем     
	nodeCheckbox.onchange = function(event) {
		deleteError(nodeCheckbox.parentNode);
		var checkbox = document.querySelector(".checkbox").getElementsByTagName('input');
		for (var i = 0; i < checkbox.length; i += 1) {
			if (checkbox[i].checked) {
				validCheckbox = true;
			} else {
				validCheckbox = false;
			}
		}
		submitButton();
	};

	//Проверка заполнения формы по кнопке отправить
	sendButton.parentNode.onclick = function(event) {
		if (sendButton.className === 'btn btn-primary disabled') {
			event.preventDefault();
			if (nodeEmail.value.length === 0) {
				showError(nodeEmail.parentNode, 'Обязательное поле Почта не заполнено');
			} else if (!validEmail) {
				showError(nodeEmail.parentNode, 'Обязательное поле Почта не проходит проверку');
			}
			if (nodePassword.value.length === 0) {
				showError(nodePassword.parentNode, 'Обязательное поле Пароль не заполнено');
			} else if (!validPassword) {
				showError(nodePassword.parentNode, 'Обязательное поле Пароль не проходит проверку');
			}
			if (!validPhone) {
				showError(nodePhone.parentNode, 'Неправильно введен номер. Оставьте поле пустым или введите номер в формате +380509993322');
			}
			if (!validCheckbox) {
				showError(nodeCheckbox.parentNode, 'Галочка "Согласен со всем" не поставлена');
			}
		}
	};

	function showError(node, errorMessage) {
		if (node.querySelector('.alert,.alert-danger') !== null) {
			errorNode = node.querySelector('.alert,.alert-danger');
			errorNode.innerHTML = errorMessage;
		} else {
			node.className = 'form-group has-error';
			errorNode = document.createElement('div');
			errorNode.className = 'alert alert-danger';
			errorNode.innerHTML = errorMessage;
			node.appendChild(errorNode);
		}
	}

	function deleteError(node) {
		if (node.querySelector('.alert,.alert-danger') !== null) {
			errorNode = node.querySelector('.alert,.alert-danger');
			node.removeChild(errorNode);
			node.className = 'form-group required';
		}
	}

	function submitButton() {
		if (validCheckbox && validEmail && validPassword && validPhone) {
			sendButton.className = 'btn btn-primary';
		} else {
			sendButton.className = 'btn btn-primary disabled';
		}
	}
}());