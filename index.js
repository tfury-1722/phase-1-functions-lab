// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    return (pickUp < 42? 42 - pickUp: pickUp - 42)
}

function distanceFromHqInFeet(pickUp) {
    const fromHqInBlocks = distanceFromHqInBlocks(pickUp) ;
    return fromHqInBlocks * 264
}

function distanceTravelledInFeet(start, end){
    const blocksTravelled = start > end?
    start - end: end - start ;
    return 264 * blocksTravelled
}

function calculatesFarePrice(start, end){
    const measurement = distanceTravelledInFeet(start, end);
    let total = 0;
    let fee = (2 / 90)
    let serviceTax = 0.22
    if (measurement > 2500) {
        return 'cannot travel that far'
    }
    if (measurement > 2000 && measurement < 2500) {
        total += 25
        return total
    }
    if (measurement < 2000 && measurement > 400) {
         total += (fee * measurement / 5.01 + serviceTax).toFixed(2);
        return parseFloat(total)
    }
    if (measurement <= 400) {
         total += 0
         return total
    }
    return
}