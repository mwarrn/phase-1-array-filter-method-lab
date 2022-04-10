function findMatching(drivers, name) {
    return drivers.filter(function (drivers) {
        return drivers.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function (drivers) {
        return drivers.toLowerCase().substring(0, letters.length) === letters.toLowerCase();
    });
}

function matchName(drivers, name) {
    return drivers.filter(function (drivers) {
        return drivers.name === name;
    });
}
