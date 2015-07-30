var minionHP = 5;
var minionLevel = 1;
var dmg = 1;
var money = 0;
var charExp = 0;
var lastExpRequirement = 10;
var charLevel = 1;
var expRequired = 25*charLevel*(1+charLevel);
var warriors = 0;

function attack(dmg) {
	minionHP = minionHP - dmg;
	updateHTML("minionHP", minionHP);
	checkMinion();
};

function buyWarrior() {
    var warriorCost = Math.floor(10 * Math.pow(1.1, warriors)); //works out the cost of this cursor
    if (money >= warriorCost) { //checks that the player can afford the cursor
        warriors++; //increases number of cursors
        money = money - warriorCost; //removes the cookies spent
        updateHTML("warriorID", warriors);
        updateHTML("money", money);
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, warriors)); //works out the cost of the next cursor
    updateHTML("warriorCostID", nextCost) ; //updates the cursor cost for the user
};

function upgradeMinion() {
	var minionUpgradeCost = Math.floor(10 * Math.pow(1.1, minionLevel));
	if (money >= minionUpgradeCost) {
		money = money - minionUpgradeCost;
		minionLevel++;
		spawnMonster();
		updateHTML("money", money);
		updateHTML("minionLevel", minionLevel);
	};
	var nextUpgradeCost = Math.floor(10 * Math.pow(1.1, minionLevel)); //works out the cost of the next cursor
    updateHTML("upgradeCost", nextUpgradeCost); //updates the cursor cost for the user
};

function checkMinion() {
	if (minionHP <= 0) {
		getReward();
		spawnMonster();
	};
}

function spawnMonster() {
	var maxhp = minionLevel * 5;
	expReward = minionLevel;
	minionHP = maxhp;
	updateHTML("minionHP", minionHP);
};

function getReward() {
	var calcMoneyDrop = Math.floor(1.1 * minionLevel); //Averiguamos el gold que dropea
	money = money + calcMoneyDrop; //agrega el gold
	var expReward = Math.floor(1.1 * minionLevel);
	charExp = charExp + expReward;
	if (charExp >= expRequired) {
		dmg = Math.floor(charLevel * 1.5);
		charLevel++;
		lastExpRequirement = charExp;
		expRequired = 25*charLevel*(1+charLevel);
		updateHTML("charLevel", charLevel);
		updateHTML("dmg", dmg);
		updateHTML("requiredExp", expRequired);
	};
	updateHTML("money", money); //actualiza el valor al usuario
	updateHTML("charExp", charExp); //actualiza el valor al usuario

};

function updateHTML(elementID, value) {
	document.getElementById(elementID).innerHTML = value;
}

window.setInterval(function() {

    attack(warriors);

}, 1000);