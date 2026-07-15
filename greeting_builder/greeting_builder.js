

function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}


function getGreeeting(timeOfDay) {
    if (timeOfDay === 'morning') {
        return 'Good morning';
    }
    else if (timeOfDay === 'afternoon') {
        return 'Good afternoon';
    }
    else if (timeOfDay === 'evening') {
        return 'Good evening';
    }
    else {      
        return "Hello";
    }   
}

function createGreeting(firstName, lastName, timeOfDay) {
    const fullName = formatName(firstName, lastName);
    const greeting = getGreeeting(timeOfDay);
    return `${greeting}, ${fullName}`;
}


console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));