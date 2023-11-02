let numbers = [1,2,3,4,5,6]

console.log(numbers.length)

mixedDataTypes = ['abc' ,1, 'ihv', 23, 'hjk', 56]

console.log(mixedDataTypes.length)

itCompanies = ['meta', 'google', 'Microsoft', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies)

console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length-1])
console.log(itCompanies[itCompanies.length/2])

for (let i=0; i<itCompanies.length; i++) {
    console.log(itCompanies[i])
}

for (let i=0; i<itCompanies.length; i++) {
    console.log(itCompanies[i].charAt(0).toUpperCase() + itCompanies[i].slice(1))
}

console.log(itCompanies.join(", ") + " are big IT companies")
itCompanies.sort()
console.log(itCompanies)

itCompanies.reverse()

console.log(itCompanies)

console.log(itCompanies.slice(0,3))

console.log(itCompanies.slice(-3))
itCompanies.remove(0)
console.log(itCompanies)
//remove first element from array in js??
