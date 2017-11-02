// Challeng 1 print all of the students and their cohorts
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (let i=0; i<students.length; i++) {
    console.log("Name:", students[i].name, ", Cohort:", students[i].cohort)
}



// Challenge 2 -- print these 
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for (let category in users){
    console.log(category.toUpperCase())
    for (let i=0; i<users[category].length; i++){
        let tempStr = i.toString() + " - "
        let nameLength = users[category][i].last_name.length + users[category][i].first_name.length

        tempStr += users[category][i].last_name + ", " + users[category][i].first_name
        tempStr += " - " + nameLength
        console.log(tempStr)
    }
}
