/**
 *   @author Bloswick, Mackenzie (bloswickm@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 5 || created: 11.21.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let prices = [];
let passengers, zones;

function main() {
    welcome();
    populatePrices();
    getPassengers();
    getZones();
    printPrice();
}

main();

function welcome() {
    console.log(`\n\tWelcome to The MidAmerica Bus Company!`);
}

/*
function populatePassengersPrice() {
    passengersPrices[0] = 7.50,
        passengersPrices[1] = 14.00,

} */

function populatePrices() {
    for (let i = 0; i < 4; i++) {
        prices[i] = [];


        // Passengers/Zones
        prices[0] = [];
        prices[1] = [];
        prices[2] = [];
        prices[3] = [];
        prices[0][0] = 7.50;
        prices[0][1] = 10.00;
        prices[0][2] = 12.00;
        prices[0][3] = 12.75;
        prices[1][0] = 14.00;
        prices[1][1] = 18.50;
        prices[1][2] = 22.00;
        prices[1][3] = 23.00;
        prices[2][0] = 20.00;
        prices[2][1] = 21.00;
        prices[2][2] = 32.00;
        prices[2][3] = 33.00;
        prices[3][0] = 35.00;
        prices[3][1] = 27.50;
        prices[3][2] = 36.00;
        prices[3][3] = 37.00;
    }
}

function getPassengers() {
    passengers = PROMPT.questionInt(`\n\tHow many passengers do you have with you today? [Enter a number 1-4]: `);
    if (passengers > 4 || passengers < 1) {
        console.log(`\n\tIncorrect input. Try again please.`);
        return getPassengers();
    }
    else {
        passengers = passengers - 1; }
}

function getZones() {
    zones = PROMPT.questionInt(`\n\tHow many zones have you crossed today? [Enter a number 0-3]: `);
    if (zones > 3 || zones < 0) {
        console.log(`\n\tIncorrect input. Try again please.`);
        return getZones();
    }
}

function printPrice() {
    console.log(`\n\tThe price of your bus ticket(s) today is $${prices[passengers][zones]}.
                \n\tPlease pay with cash.
                \n\tThank you for using MidAmerica Bus Company.`);
}
