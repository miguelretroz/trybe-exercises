let n = 5;

let lineSpaces = [];

for (let spaceIndex = 0; spaceIndex < (Math.ceil((n / 2))); spaceIndex += 1) {
    lineSpaces.push(' ');
};

for (let lineIndex = 1; lineIndex <= n; lineIndex += 2) {
    lineSpaces.shift();

    let pyramidLine = '';

    for (let space of lineSpaces) {
        pyramidLine += space;
    };

    for (let asterisk = 0; asterisk < lineIndex; asterisk += 1) {
        pyramidLine += '*';
    };

    console.log(pyramidLine);
};