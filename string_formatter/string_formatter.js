function cleanText(text){
    return text.trim();
}

function capitalize(text){
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatDisplayName(firstName, lastName){
    firstName = cleanText(firstName);
    lastName = cleanText(lastName);
    firstName = capitalize(firstName);
    lastName = capitalize(lastName);
    return firstName + " " + lastName;
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));