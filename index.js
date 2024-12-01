const heroi = 'Smooth';
const xp = 10001;
let rank;

if (xp <= 1000) {
rank = 'Ferro'
console.log(`O Herói de nome ${heroi} está no nível de ${rank}`)
}

else if (xp > 1000 && xp <= 2000) {
    rank = 'Bronze'
    console.log(`O Herói de nome ${heroi} está no nível de ${rank}`)
    }

else if (xp > 2000 && xp <= 5000) {
    rank = 'Prata'
    console.log(`O Herói de nome ${heroi} está no nível de ${rank}`)
    }
else if (xp > 5000 && xp <= 7000) {
    rank = 'Ouro'
    console.log(`O Herói de nome ${heroi} está no nível de ${rank}`)
    }

else if (xp > 7000 && xp <= 8000) {
    rank = 'Platina'
    console.log(`O Herói de nome ${heroi} está no nível de ${rank}`)
    }
else if (xp > 8000 && xp <= 9000) {
    rank = 'Ascendente'
    console.log(`O Herói de nome ${heroi} está no nível de ${rank}`)
    }

else if (xp > 9000 && xp <= 10000) {
    rank = 'Imortal'
    console.log(`O Herói de nome ${heroi} está no nível de ${rank}`)
    }
else if (xp > 10000) {
    rank = 'Radiante'
    console.log(`O Herói de nome ${heroi} está no nível de ${rank}`)
    }
