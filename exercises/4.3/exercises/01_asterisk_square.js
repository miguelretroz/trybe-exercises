let n = 5;

let asterisks = [];

for (let asterIndex = 0; asterIndex < n; asterIndex += 1) {
    asterisks.push('*');
};

for (let impreIndex = 0; impreIndex < n; impreIndex += 1) {
    let asterisksLine = '';
    for (asterisk of asterisks) {
        asterisksLine += asterisk;
    }
    console.log(asterisksLine);
};

console.log();

let asterisks02 = '';

for (let stringIndex = 0; stringIndex < n; stringIndex += 1) {
    asterisks02 += '*';
};

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(asterisks02);
};