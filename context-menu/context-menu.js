/*Реализовать ContextMenu

http://jsfiddle.net/varDenB/eqLwgr3p/

первый аргумент - узел на котором будет работать контекстное меню
второй аргумент - описание структуры меню. Пример описания 
прикладывается. 
-Структура может быть любой по вложенности и 
количеству элементов меню. (рекурсивно генерировать DOM будет ок)
-подменю может содержать вложенные подменю
-при правом клике по узлу, для которого было создано 
ContextMenu показывать меню прямо под местом клика.
-при клике по пункту меню должна выполняться соответствующая функция
каждый элемент, содержащий подменю, должен быть отмечен ">" символом
-подменю открывается при наведении на пункт подменю, и 
закрывается при уходе мышки с подменю или пункта подменю 
(смотри события mouseenter и mouseleave)
-с позиционированием (чтобы все меню и подменю вмещались 
в видимую часть экрана) можно не заморачиваться
-стилизовать меню можно на свой вкус (главное - видимые 
границы элементов)
*/
"use strict";
window.onload = function() {
	(function() {
		var menuExample = [{
			title: 'File',
			action: function() {
				console.log('open file');
			}
		}, {
			title: 'Edit',
			action: function() {
				console.log('edit content');
			}
		}, {
			title: 'More stuff',
			submenu: [{
				title: 'Send by email',
				action: function() {
					console.log('emailed');
				}
			}, {
				title: 'Sends',
				submenu: [{
					title: 'Send by email',
					action: function() {
						console.log('Sends emailed');
					}
				}, {
					title: 'Send via skype',
					action: function() {
						console.log('Sends skyped');
					}
				}]
			}]
		}, {
			title: 'Search',
			action: function() {
				console.log('search');
			}
		}, {
			title: 'View',
			submenu: [{
				title: 'Bigger',
				action: function() {
					console.log('bigger');
				}
			}, {
				title: 'Smaller',
				submenu: [{
					title: '5%',
					action: function() {
						console.log('5%');
					}
				}, {
					title: '20%',
					action: function() {
						console.log('20%');
					}
				}]
			}]
		}];

		var ESC_KEYCODE = 27;

		function ContextMenu(node, data) {
			this.node = node;
			this.menu = this.buildMenu(data);
			this.initMenu();
			this.initSubmenu();
			if (!ContextMenu.menus) {
				ContextMenu.menus = [];
			}
			ContextMenu.menus.push(this);

		}

		ContextMenu.prototype.buildMenu = function(structMenu) {
			var menu = document.createElement('ul');
			menu.className += 'cm-widget-context-menu';
			var menuElement;
			for (var i = 0; i < structMenu.length; i += 1) {
				menuElement = document.createElement('li');
				menuElement.innerHTML = structMenu[i].title;
				if (structMenu[i].hasOwnProperty('submenu')) {
					menuElement.className += ' cm-widget-submenu';
					menuElement.appendChild(this.buildMenu(structMenu[i].submenu));
				} else {
					menuElement.addEventListener('click', structMenu[i].action, false);
				}
				menu.appendChild(menuElement);
			}
			return menu;
		};

		ContextMenu.prototype.initMenu = function() {
			this.node.addEventListener('contextmenu', this.show.bind(this), false);
			document.addEventListener('click', this.hide.bind(this), false);
			document.addEventListener('keyup', this.hideByEsc.bind(this), false);

		};

		ContextMenu.prototype.initSubmenu = function() {
			var parentNodeSubmenu = this.menu.querySelectorAll('.cm-widget-submenu');
			Array.prototype.forEach.call(parentNodeSubmenu, function(parentNodeSubmenu) {
				var submenuNode = parentNodeSubmenu.querySelector('ul');
				parentNodeSubmenu.addEventListener('mouseenter', function() {
					submenuNode.style.display = 'block';
				});
				parentNodeSubmenu.addEventListener('mouseleave', function() {
					submenuNode.style.display = 'none';
				});
			});


		};

		ContextMenu.prototype.show = function(event) {
			ContextMenu.menus.forEach(function(menuInstance) {
				menuInstance.hide();
			});
			event.preventDefault();
			document.body.appendChild(this.menu);
			this.menu.style.display = 'block';
			this.menu.style.left = event.pageX + 'px';
			this.menu.style.top = event.pageY + 'px';
		};

		ContextMenu.prototype.hide = function() {
			this.menu.style.display = 'none';
		};

		ContextMenu.prototype.hideByEsc = function(event) {
			if (event.keyCode === ESC_KEYCODE) {
				this.hide();
			}
		};

		new ContextMenu(document.querySelector('.main'), menuExample);
		new ContextMenu(document.querySelector('.block'), menuExample);
	}());
};