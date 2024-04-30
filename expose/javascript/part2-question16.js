for (let stat in statistics) {
    if (stat[0] === 'r' | statistics[stat] % 2 === 1) {
        console.log(statistics[stat]);
    }
}
 