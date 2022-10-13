const t = [1, -1, 3]
console.log(t.length)
const t2 = t.concat(5) // push can be used but concat is much better as it is immutable
console.log(t.length)
console.log(t[1])
t2.forEach(value => {
    console.log(value)
})

const x = [1, 2, 3]

const m1 = x.map(value => value * 2)
console.log(m1)

const m2 = t2.map(value => '<li>' + value + '</li>')
console.log(m2)

// Destructuring

const y = [1,2,3,4,5]
const [first, second, ...rest] = y
console.log(first, second) // recieve first and second elem
console.log(rest) // recieve remaining elements
