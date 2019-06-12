let mainCharacter = {
    name : "Oliwood",
    level : 23,
    life : 300,
    weapon : {
        name : "FireSword",
        damage : 200,
    },
    attack : function() {
        let cul = mainCharacter.level * mainCharacter.weapon.damage;
        return console.log(`${mainCharacter.name} attaque avec l'arme ${mainCharacter.weapon.name} les dégâts sont ${cul}`)
    }
}