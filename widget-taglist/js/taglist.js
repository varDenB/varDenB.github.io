'use strict';
$(document).ready(function() {
	var ENTER_KEYCODE = 13;
	function Taglist(node, tags) {
		this.node = node;
		this.tags = tags||[];
		this.Taglist = this.buildTaglist();
		this.$switchMode = $('.w-taglist-mode-switch', this.node);
		this.$nodeInput = $('.w-taglist-input', this.node);
		this.$buttonSave = $('.w-taglist-input .btn-primary', this.node);
		this.$buttonDelAll = $('.w-taglist-input .btn-danger', this.node);
		this.$buttonDel = $('.w-taglist-tag-del', this.node);
		this.flagSwitchMode = 'lock';
		this.$nodeInput.hide();
		this.$buttonDel.hide();
		this.init();
	}

	Taglist.prototype.buildTaglist = function() {
		$('<div class="w-taglist container"><span class="w-taglist-mode-switch">Редактировать теги</span>'+
        '<div class="w-taglist-displaying"></div>'+
        '<div class="w-taglist-input input-group">'+
                '<input type="text" class="form-control">'+
                '<span class="input-group-btn">'+
        '<button class="btn btn-primary" type="button">добавить</button>'+
        '<button class="btn btn-danger" type="button">удалить все теги</button></span></div></div>').appendTo(this.node);
		for (var i = 0; i < this.tags.length; i += 1) {
			this.addNodeTag(this.tags[i]);
		}
	};

	Taglist.prototype.init = function() {
		var _this = this;

		this.$switchMode.on('click', function(event) {
			if (_this.flagSwitchMode === 'unlock') {
				_this.flagSwitchMode = 'lock';
				_this.$nodeInput.hide();
				_this.$buttonDel.hide();
				_this.$switchMode.text('Редактировать теги');
			} else {
				_this.flagSwitchMode = 'unlock';
				_this.$nodeInput.show();
				_this.$buttonDel.show();
				_this.$switchMode.text('Завершить редактирование');
			}
		});

		this.$buttonSave.on('click', function(event) {
			_this.checkTag();
		});

		this.$buttonDelAll.on('click', function(event) {
			_this.tags=[];
			$('.w-taglist-tag',_this.node).remove();
		});

		$(this.node).on('click', '.w-taglist-tag-del', function(event) {
			var delTag = $('.w-taglist-tag-value', event.target.parentNode).text();
			_this.tags.splice(_this.tags.indexOf(delTag), 1);
			$(event.target.parentNode).remove();
		});

		$(document).on('keyup', function(event) {
			if (event.keyCode === ENTER_KEYCODE) {
				_this.checkTag();
			}
		});
	};

	Taglist.prototype.checkTag = function(tag) {
				var newTag = $('input', this.node).val();
				newTag = $.trim(newTag);
				if (this.tags.indexOf(newTag) === -1 && newTag.length !== 0) {
					this.tags.push(newTag);
					this.addNodeTag((newTag));
					$('input').val('');
				}
	};

	Taglist.prototype.addNodeTag = function(tag) {
		tag = $.trim(tag);
		var node = $('.w-taglist-displaying', this.node);
		$('<div class="w-taglist-tag label label-default"><span class="w-taglist-tag-value">' + tag + '</span>'+
            '<span class="w-taglist-tag-del">X</span></div>').appendTo(node);
		this.$buttonDel = $('.w-taglist-tag-del', this.node);
	};

	new Taglist($('.top'), ['HTML','CSS','JavaScript','Ajax','JQuery']);
	new Taglist($('.bottom'));
});