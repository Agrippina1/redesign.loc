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
		{name:'������', key:'B', openWith:'[b]', closeWith:'[/b]', className:'bold'},
		{name:'������', key:'I', openWith:'[i]', closeWith:'[/i]', className:'italic'},
		{name:'������������', key:'U', openWith:'[u]', closeWith:'[/u]', className:'underline'},
		{separator:'---------------' },
		{name:'��������', key:'P', replaceWith:'[img][![������� URL ��������]!][/img]', className:'picture'},
		{name:'������', key:'L', openWith:'[url=[![������� Url, ��������: https://www.disability.ru]!]]', closeWith:'[/url]', placeHolder:'������� �������� ������', className:'link'},
		{name:'�����', key:'F', replaceWith:'[video][![' +
											'������� Url �����������.\n\n�������������� ����� �� ��������� ��������:\n' +
											'	������		- ��� ������\n' +
											'	YouTube.com	- https://youtu.be/XXX\n' +
											'			��� - https://www.youtube.com/watch?v=XXX\n' +
											'	Vimeo.com	- http://vimeo.com/XXX\n' +
											'	Rutube.ru	- http://rutube.ru/video/XXX\n' +
                                            '	Mail.ru	    - http://my.mail.ru/XXX..XXX/XXX.html\n' +
            								'  Facebook.com	- https://www.facebook.com/XXX/videos/XXX\n' +
            								' ��� XXX �������������� ��� ����������� �����' +
											']!][/video]', className:'video'},
		{name:'�����', key:'A', replaceWith:'[audio][![' +
											'������� Url �����������.\n\n�������������� ����� ������ � Pleer.com:\n' +
											'��� ������ ������ � ������ ��������\n' +
											'	������		- ��� ������\n' +
											'	Pleer.com - http://pleer.com/tracks/XXXXXXXX\n' +
											'	Zvukoff.ru - http://zvukoff.ru/download/XXXXXX\n' +
											'	� �.�. \n' +
											' ��� XXX �������������� ��� ����������� �����-�����\n\n' +
											']!][/audio]', className:'audio'},
		{separator:'---------------' },
		{name:'������ ������', key:'S', openWith:'[size=[![������ ������ 1-7]!]]', closeWith:'[/size]', className:'fonts',
		dropMenu :[
			{name:'�������', openWith:'[size=6]', closeWith:'[/size]' },
			{name:'�������', openWith:'[size=4]', closeWith:'[/size]' },			
			{name:'�������', openWith:'[size=2]', closeWith:'[/size]' },
			{name:'������', openWith:'[size=1]', closeWith:'[/size]' }
		]},
		{separator:'---------------' },
		{name:'�������������� ������',  key:'M', openWith:'[list]\n', closeWith:'\n[/list]', className:'list-bullet'},
		{name:'������������ ������',  key:'N',openWith:'[list=[![��������� �����]!]]\n', closeWith:'\n[/list]', className:'list-numeric'}, 
		{name:'����� ������',  key:'J', openWith:'[*] ', className:'list-item'},
		{separator:'---------------' },
		{name:'������', key:'Q', openWith:'[quote]', closeWith:'[/quote]', className:'quotes'},
		{name:'���', openWith:'[code]', closeWith:'[/code]', className:'code'}, 
		{separator:'---------------' },
		{name:'���� ������', className:'palette', 
			openWith:'[color=[![Color]!]]', 
			closeWith:'[/color]',
			dropMenu: [
				{name:'������-������',	openWith:'[color=#FCE94F]', 	closeWith:'[/color]', className:"col1-1" },
				{name:'������',	openWith:'[color=#EDD400]', 	closeWith:'[/color]', className:"col1-2" },
				{name:'�����-������', openWith:'[color=#C4A000]', 	closeWith:'[/color]', className:"col1-3" },
				
				{name:'������-���������', openWith:'[color=#FCAF3E]', 	closeWith:'[/color]', className:"col2-1" },
				{name:'���������', openWith:'[color=#F57900]', 	closeWith:'[/color]', className:"col2-2" },
				{name:'�����-���������', openWith:'[color=#CE5C00]', 	closeWith:'[/color]', className:"col2-3" },
				
				{name:'������-����������', 	openWith:'[color=#E9B96E]', 	closeWith:'[/color]', className:"col3-1" },
				{name:'����������', 	openWith:'[color=#C17D11]', 	closeWith:'[/color]', className:"col3-2" },
				{name:'�����-����������',	openWith:'[color=#8F5902]', 	closeWith:'[/color]', className:"col3-3" },
				
				{name:'������-�������', 	openWith:'[color=#8AE234]', 	closeWith:'[/color]', className:"col4-1" },
				{name:'�������', 	openWith:'[color=#73D216]', 	closeWith:'[/color]', className:"col4-2" },
				{name:'�����-�������',	openWith:'[color=#4E9A06]', 	closeWith:'[/color]', className:"col4-3" },
				
				{name:'������-�����', 	openWith:'[color=#729FCF]', 	closeWith:'[/color]', className:"col5-1" },
				{name:'�����', 	openWith:'[color=#3465A4]', 	closeWith:'[/color]', className:"col5-2" },
				{name:'�����-�����',	openWith:'[color=#204A87]', 	closeWith:'[/color]', className:"col5-3" },
	
				{name:'������-����������', openWith:'[color=#AD7FA8]', 	closeWith:'[/color]', className:"col6-1" },
				{name:'����������', openWith:'[color=#75507B]', 	closeWith:'[/color]', className:"col6-2" },
				{name:'�����-����������',	openWith:'[color=#5C3566]', 	closeWith:'[/color]', className:"col6-3" },
				
				{name:'������-�������', 	openWith:'[color=#EF2929]', 	closeWith:'[/color]', className:"col7-1" },
				{name:'�������', 	openWith:'[color=#CC0000]', 	closeWith:'[/color]', className:"col7-2" },
				{name:'�����-�������',	openWith:'[color=#A40000]', 	closeWith:'[/color]', className:"col7-3" },
				
				{name:'�����', 	openWith:'[color=#FFFFFF]', 	closeWith:'[/color]', className:"col8-1" },
				{name:'���������', 	openWith:'[color=#D3D7CF]', 	closeWith:'[/color]', className:"col8-2" },
				{name:'������-�����',	openWith:'[color=#BABDB6]', 	closeWith:'[/color]', className:"col8-3" },
				
				{name:'�����', 	openWith:'[color=#888A85]', 	closeWith:'[/color]', className:"col9-1" },
				{name:'�����-�����', 	openWith:'[color=#555753]', 	closeWith:'[/color]', className:"col9-2" },
				{name:'������',	openWith:'[color=#000000]', 	closeWith:'[/color]', className:"col9-3" }
			]
		},
		{name:'�������� ���',  key:'E', className:"clean", replaceWith:function(markitup) { return markitup.selection.replace(/\[(.*?)\]/g, "") } },
		{name:'������������',  key:'W', className:"preview", call:'preview' }
	]
}