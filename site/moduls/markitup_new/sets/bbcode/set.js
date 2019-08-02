// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// BBCode tags example
// http://en.wikipedia.org/wiki/Bbcode
// ----------------------------------------------------------------------------
// Feel free to add more tags
// ----------------------------------------------------------------------------
mySettings = {
	previewParserPath:	'~/templates/parser.php', // path to your BBCode parser
	markupSet: [
		{name:'Жирный', key:'B', openWith:'[b]', closeWith:'[/b]', className:'bold'},
		{name:'Курсив', key:'I', openWith:'[i]', closeWith:'[/i]', className:'italic'},
		{name:'Подчеркнутый', key:'U', openWith:'[u]', closeWith:'[/u]', className:'underline'},
		{separator:'---------------' },
		{name:'Картинка', key:'P', replaceWith:'[img][![Укажите URL картинки]!][/img]', className:'picture'},
		{name:'Ссылка', key:'L', openWith:'[url=[![Укажите Url, например: https://www.disability.ru]!]]', closeWith:'[/url]', placeHolder:'Укажите описание ссылки', className:'link'},
		{name:'Видео', key:'F', replaceWith:'[video][![' +
											'Укажите Url видеоролика.\n\nПоддерживаются видео со следующих ресурсов:\n' +
											'	ресурс		- вид ссылки\n' +
											'	YouTube.com	- https://youtu.be/XXX\n' +
											'			или - https://www.youtube.com/watch?v=XXX\n' +
											'	Vimeo.com	- http://vimeo.com/XXX\n' +
											'	Rutube.ru	- http://rutube.ru/video/XXX\n' +
                                            '	Mail.ru	    - http://my.mail.ru/XXX..XXX/XXX.html\n' +
            								'  Facebook.com	- https://www.facebook.com/XXX/videos/XXX\n' +
            								' где XXX индивидуальный код конкретного видео' +
											']!][/video]', className:'video'},
		{name:'Аудио', key:'A', replaceWith:'[audio][![' +
											'Укажите Url аудиоссылки.\n\nПоддерживаются аудио только с Pleer.com:\n' +
											'или прямые ссылки с других ресурсов\n' +
											'	ресурс		- вид ссылки\n' +
											'	Pleer.com - http://pleer.com/tracks/XXXXXXXX\n' +
											'	Zvukoff.ru - http://zvukoff.ru/download/XXXXXX\n' +
											'	и т.д. \n' +
											' где XXX индивидуальный код конкретного аудио-трека\n\n' +
											']!][/audio]', className:'audio'},
		{separator:'---------------' },
		{name:'Размер текста', key:'S', openWith:'[size=[![Размер текста 1-7]!]]', closeWith:'[/size]', className:'fonts',
		dropMenu :[
			{name:'большой', openWith:'[size=6]', closeWith:'[/size]' },
			{name:'крупный', openWith:'[size=4]', closeWith:'[/size]' },			
			{name:'средний', openWith:'[size=2]', closeWith:'[/size]' },
			{name:'мелкий', openWith:'[size=1]', closeWith:'[/size]' }
		]},
		{separator:'---------------' },
		{name:'Ненумерованный список',  key:'M', openWith:'[list]\n', closeWith:'\n[/list]', className:'list-bullet'},
		{name:'Нумерованный список',  key:'N',openWith:'[list=[![Начальный номер]!]]\n', closeWith:'\n[/list]', className:'list-numeric'}, 
		{name:'Пункт списка',  key:'J', openWith:'[*] ', className:'list-item'},
		{separator:'---------------' },
		{name:'Цитата', key:'Q', openWith:'[quote]', closeWith:'[/quote]', className:'quotes'},
		{name:'Код', openWith:'[code]', closeWith:'[/code]', className:'code'}, 
		{separator:'---------------' },
		{name:'Цвет текста', className:'palette', 
			openWith:'[color=[![Color]!]]', 
			closeWith:'[/color]',
			dropMenu: [
				{name:'светло-желтый',	openWith:'[color=#FCE94F]', 	closeWith:'[/color]', className:"col1-1" },
				{name:'желтый',	openWith:'[color=#EDD400]', 	closeWith:'[/color]', className:"col1-2" },
				{name:'темно-желтый', openWith:'[color=#C4A000]', 	closeWith:'[/color]', className:"col1-3" },
				
				{name:'светло-оранжевый', openWith:'[color=#FCAF3E]', 	closeWith:'[/color]', className:"col2-1" },
				{name:'оранжевый', openWith:'[color=#F57900]', 	closeWith:'[/color]', className:"col2-2" },
				{name:'темно-оранжевый', openWith:'[color=#CE5C00]', 	closeWith:'[/color]', className:"col2-3" },
				
				{name:'светло-коричневый', 	openWith:'[color=#E9B96E]', 	closeWith:'[/color]', className:"col3-1" },
				{name:'коричневый', 	openWith:'[color=#C17D11]', 	closeWith:'[/color]', className:"col3-2" },
				{name:'темно-коричневый',	openWith:'[color=#8F5902]', 	closeWith:'[/color]', className:"col3-3" },
				
				{name:'светло-зеленый', 	openWith:'[color=#8AE234]', 	closeWith:'[/color]', className:"col4-1" },
				{name:'зеленый', 	openWith:'[color=#73D216]', 	closeWith:'[/color]', className:"col4-2" },
				{name:'темно-зеленый',	openWith:'[color=#4E9A06]', 	closeWith:'[/color]', className:"col4-3" },
				
				{name:'светло-синий', 	openWith:'[color=#729FCF]', 	closeWith:'[/color]', className:"col5-1" },
				{name:'синий', 	openWith:'[color=#3465A4]', 	closeWith:'[/color]', className:"col5-2" },
				{name:'темно-синий',	openWith:'[color=#204A87]', 	closeWith:'[/color]', className:"col5-3" },
	
				{name:'светло-фиолетовый', openWith:'[color=#AD7FA8]', 	closeWith:'[/color]', className:"col6-1" },
				{name:'фиолетовый', openWith:'[color=#75507B]', 	closeWith:'[/color]', className:"col6-2" },
				{name:'темно-фиолетовый',	openWith:'[color=#5C3566]', 	closeWith:'[/color]', className:"col6-3" },
				
				{name:'светло-красный', 	openWith:'[color=#EF2929]', 	closeWith:'[/color]', className:"col7-1" },
				{name:'красный', 	openWith:'[color=#CC0000]', 	closeWith:'[/color]', className:"col7-2" },
				{name:'темно-красный',	openWith:'[color=#A40000]', 	closeWith:'[/color]', className:"col7-3" },
				
				{name:'белый', 	openWith:'[color=#FFFFFF]', 	closeWith:'[/color]', className:"col8-1" },
				{name:'пепельный', 	openWith:'[color=#D3D7CF]', 	closeWith:'[/color]', className:"col8-2" },
				{name:'светло-серый',	openWith:'[color=#BABDB6]', 	closeWith:'[/color]', className:"col8-3" },
				
				{name:'серый', 	openWith:'[color=#888A85]', 	closeWith:'[/color]', className:"col9-1" },
				{name:'темно-серый', 	openWith:'[color=#555753]', 	closeWith:'[/color]', className:"col9-2" },
				{name:'черный',	openWith:'[color=#000000]', 	closeWith:'[/color]', className:"col9-3" }
			]
		},
		{name:'Очистить код',  key:'E', className:"clean", replaceWith:function(markitup) { return markitup.selection.replace(/\[(.*?)\]/g, "") } },
		{name:'Предпросмотр',  key:'W', className:"preview", call:'preview' }
	]
}