#Script by 7fi
str default = '#fff';
str held = '#666';
public action start() {
    str holder = (str) GAME.UI.addDIV('holder', true, "position:absolute; width: 150px;right:52%; bottom: 10px; grid-template-columns: 100px repeat(3, 50px); grid-template-rows: 1fr 1fr 1fr; gap:10px 10px; display:grid;");
    str w = (str)GAME.UI.addDIV('w', true, "grid-column: 3; grid-row:1; width: 50px; height: 50px; background-color:#fff;border-radius:5px;",holder);
    str a = (str)GAME.UI.addDIV('a', true, "grid-column: 2; grid-row:2; width: 50px; height: 50px; background-color:#fff;border-radius:5px;",holder);
    str s = (str)GAME.UI.addDIV('s', true, "grid-column: 3; grid-row:2; width: 50px; height: 50px; background-color:#fff;border-radius:5px;",holder);
    str d = (str)GAME.UI.addDIV('d', true, "grid-column: 4; grid-row:2; width: 50px; height: 50px; background-color:#fff;border-radius:5px;",holder);
    str shift = (str)GAME.UI.addDIV('shift', true, "grid-column: 1; grid-row:2; width: 100px; height: 50px; background-color:#fff;border-radius:5px;",holder);
    str space = (str)GAME.UI.addDIV(' ', true, "grid-column: 2 / 4; grid-row:3; width: 170px; height: 50px; background-color:#fff;border-radius:5px;",holder);
}
public action onKeyPress(str key, num code) {
	GAME.log(key);
	if(key == 'w' || key == 'a' || key == 's' || key == 'd' || key == 'shift' || key == ' '){
		GAME.UI.updateDIV(key,"background-color" , held);
	}
}
public action onKeyUp(str key, num code) {
    if(key == 'w' || key == 'a' || key == 's' || key == 'd' || key == 'shift' || key == ' '){
		GAME.UI.updateDIV(key,"background-color" , default);
	}
}
