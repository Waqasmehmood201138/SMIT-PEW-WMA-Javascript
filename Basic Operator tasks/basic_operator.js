//  Challenge => 01 : If your country split in half, and each half would contain half the population, then how many people will live in each half? 

let totalPopulation = parseInt(prompt("Enter Your Country Population"));

let splitInHalf = totalPopulation / 2;

let eachHalfPopulation = splitInHalf / 2;

alert(`People in each half ${eachHalfPopulation}`);

// 02 : Increase the population of your country by 1 and log the result to the console

alert(`Increasing the population of your country by 1 "totalPopulation + 1"`)
alert(`New Population: ${totalPopulation + 1}`)

// 03 : Finland has a population of 6 million. Does your country have more people than finland

let finlandPopulation = 6000000;

if(totalPopulation >= finlandPopulation){
     alert("Yes my country have more people than finland");
}
else{
    alert("No! My country have not more people than finland")
}

// 04 : The average population of country is 33 million people. Does your country have less people than average country?

let averagePopulatedCountry = 33000000;

if(totalPopulation >= finlandPopulation){
     alert("No! my country have more people than average country population");
}
else{
    alert("Yes! My country have Less people than average country population")
}

// 05 : Based on the variable you created, create a new variable 'description' which contain a string with this format: 'Portugal is in Europe, and its 11 million people speak portugues'

let description = "'Portugal is in Europe, and its 11 million people speak portugues'"
alert(description)



