let n = 7;

if ((n % 2) === 0) {
     n -= 1;
}

let lineSpace = [];

for (let spaceIndex = 0; spaceIndex < (Math.ceil((n / 2))); spaceIndex += 1) {
    lineSpace.push(' ');
};

for (let lineIndex = 1; lineIndex <= n; lineIndex += 2) {
    lineSpace.shift();

    let pyramid = '';

    for (space of lineSpace) {
        pyramid += space;
    };

    if(lineIndex === 1) {
        pyramid += '*';
        console.log(pyramid);
    } else if( lineIndex === n) {
        for (let asterisk = 0; asterisk < n; asterisk += 1) {
            pyramid += '*';
        };
        console.log(pyramid);
    } else {
        let pyramidInternal = '';
        for (let spaceInterIndex = 0; spaceInterIndex < (lineIndex - 2); spaceInterIndex += 1) {
            pyramidInternal += ' ';
        };
        console.log(pyramid + '*' + pyramidInternal + '*');
    }
};