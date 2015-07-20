var hp = 5;
var level = 1;
var dmg = 1;

function attack() {
	hp = hp - dmg;
	document.getElementById('hp').innerHTML = hp;
	if (hp == 0) {
		spawnMonster()
		document.getElementById('hp').innerHTML = hp;
	};
};

function spawnMonster() {
	var maxhp = level * 5;
	hp = maxhp
};