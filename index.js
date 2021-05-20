// FORK this starter file and save it to your own Repl.it account.


let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842;
let totalMasskg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 0;
let weatherStatus = "clear"; 



//write coe to generate report here

let theLine = "-----------------------------------";

console.log(theLine);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(theLine);
let dateLine = "Date: " + date;
console.log(dateLine);
console.log("Time:" + time);
console.log();
console.log(theLine);


console.log(theLine);
console.log("> ASTRONAUT INFO");
console.log(theLine);
console.log("* count:" + astronautCount);
console.log("* status:" + astronautStatus);
console.log();
console.log(theLine);
console.log("> FUEL DATA");
console.log(theLine);
console.log("* Fuel temp celsius: " + fuelTempCelsius 
+ "c");
console.log("* Fuel level: " + (fuelLevel + 100) + "%");
console.log();









// Write code to generate the LC04 report here:




// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.