function getColor(phrase) {
    if (phrase === "stop") {
        return 'red';
    } else if (phrase === "slow") {
        return 'yellow';
    } else if (phrase === "go") {
        return 'green';
    } else {
        return 'purple';
    }
}


