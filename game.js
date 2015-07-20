var minionHP = 5;
var minionLevel = 1;
var dmg = 1;
var money = 0;
var expReward = minionLevel;
var charExp = 0;
var lastExpRequirement = 10;
var charLevel = 1;
var expRequired = 25*charLevel*(1+charLevel)

function attack() {
	minionHP = minionHP - dmg;
	document.getElementById('minionHP').innerHTML = minionHP;
	if (minionHP <= 0) {
		spawnMonster()
		getReward()
		checkExp()
	};
};

function spawnMonster() {
	var maxhp = minionLevel * 5;
	expReward = minionLevel;
	minionHP = maxhp;
	document.getElementById('minionHP').innerHTML = minionHP;
};

function getReward() {
	var calcMoneyDrop = Math.floor(1.1 * minionLevel); //Averiguamos el gold que dropea
	money = money + calcMoneyDrop; //agrega el gold
	charExp = charExp + expReward;
	document.getElementById('money').innerHTML = money; //actualiza el valor al usuario
	document.getElementById('charExp').innerHTML = charExp; //actualiza el valor al usuario
};

function upgradeMinion() {
	var minionUpgradeCost = Math.floor(10 * Math.pow(1.1, minionLevel));
	if (money >= minionUpgradeCost) {
		money = money - minionUpgradeCost;
		minionLevel = minionLevel + 1;
		spawnMonster()
		document.getElementById('money').innerHTML = money;
		document.getElementById('minionLevel').innerHTML = minionLevel;
	};
	var nextUpgradeCost = Math.floor(10 * Math.pow(1.1, minionLevel)); //works out the cost of the next cursor
    document.getElementById('upgradeCost').innerHTML = nextUpgradeCost; //updates the cursor cost for the user
};

function checkExp() {
	//var expRequired = Math.pow(charLevel, charLevel) + lastExpRequirement;
	//var expRequired = 25*charLevel*(1+charLevel)
	if (charExp >= expRequired) {
		dmg = dmg * 2;
		charLevel = charLevel + 1;
		lastExpRequirement = charExp;
		expRequired = 25*charLevel*(1+charLevel);
		document.getElementById('charLevel').innerHTML = charLevel;
		document.getElementById('dmg').innerHTML = dmg;
		document.getElementById('requiredExp').innerHTML = expRequired;
	};
};