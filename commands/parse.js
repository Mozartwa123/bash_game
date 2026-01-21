const arrise = s => s.trim().split(/\s+/)

/*
    TO DO: Using better parsing algorithm
*/

console.log(arrise("sudo rm -rf --no-preserve-root /*"))
console.log(arrise("cd Documents"))
console.log(arrise("ls | grep hello"))