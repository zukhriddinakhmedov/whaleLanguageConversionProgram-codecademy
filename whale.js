let input = 'turpentine and turtles'
let vowels = ['a', 'e', 'i', 'o', 'u']
const resultArray = []

for (let i = 0; i < input.length; i++) {
    //console.log(input[i])
    //console.log('i is '+ i)
    for (let vowel = 0; vowel < vowels.length; vowel++) {
        //console.log(vowels[v])
        //console.log('v is' + v)
        if (input[i] === vowels[vowel]) {
            if (input[i] === 'e' || input[i] === 'u') {
                resultArray.push(input[i])
            }
        }
    }
}
console.log(resultArray.join('').toUpperCase())
