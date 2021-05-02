let n = 5;

let asterisksLine = [];

for (let spacesIndex = 0; spacesIndex < n; spacesIndex += 1) {
    asterisksLine.push(' ');
};

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    asterisksLine.shift();
    asterisksLine.push('*');
    
    let line = '';
    for (let asterisk of asterisksLine) {
        line += asterisk;
    };
    console.log(line);
};