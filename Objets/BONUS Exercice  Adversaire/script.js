let Character = {
    name : "Oliwood",
    level : 23,
    life : 300,
    weapon : {
        name : "FireSword",
        damage : 200,
    },
    attack : function() {
        let degats = Character.level * Character.weapon.damage;
        return console.log(`${Character.name} attaque avec l'arme ${Character.weapon.name} les dégâts sont ${degats}`)
    },
    receiveDamage : function() {
    },
};

let opponentCharacter = {
    name : "Dark Knight",
    level : 25,
    life : 350,
    weapon : {
        name : "GiantAxe",
        damage : 150,
    },
    attack : function() {
        let degats = opponentCharacter.level * opponentCharacter.weapon.damage;
        return console.log(`${opponentCharacter.name} attaque avec l'arme ${opponentCharacter.weapon.name} les dégâts sont ${degats}`)
    },
    receiveDamage : function() {
    },
};

let mainCharacter = {
    name : "Oliwood",
    level : 23,
    life : 300,
    weapon : {
        name : "FireSword",
        damage : 200,
    },
    attack : function() {
        let degats = mainCharacter.level * mainCharacter.weapon.damage;
        return console.log(`${mainCharacter.name} attaque avec l'arme ${mainCharacter.weapon.name} les dégâts sont ${degats}`)
    },
    receiveDamage : function() {
    },
};