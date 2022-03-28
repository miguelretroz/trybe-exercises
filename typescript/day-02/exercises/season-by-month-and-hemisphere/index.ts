import readlineSync from 'readline-sync';

enum YearMonths {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

enum Seasons {
  Spring = "Spring",
  Summer = "Summer",
  Fall = "Fall",
  Winter = "Winter"
}

const seasonsNorth = {
  [Seasons.Fall]: [YearMonths.September, YearMonths.October, YearMonths.November, YearMonths.December],
  [Seasons.Winter]: [YearMonths.December, YearMonths.January, YearMonths.February, YearMonths.March],
  [Seasons.Spring]: [YearMonths.March, YearMonths.April, YearMonths.May, YearMonths.June],
  [Seasons.Summer]: [YearMonths.June, YearMonths.July, YearMonths.August, YearMonths.September],
}

const seasonsSouth = {
  [Seasons.Fall]: [YearMonths.March, YearMonths.April, YearMonths.May, YearMonths.June],
  [Seasons.Winter]: [YearMonths.June, YearMonths.July, YearMonths.August, YearMonths.September],
  [Seasons.Spring]: [YearMonths.September, YearMonths.October, YearMonths.November, YearMonths.December],
  [Seasons.Summer]: [YearMonths.December, YearMonths.January, YearMonths.February, YearMonths.March],
}

enum Hemispheres {
  Northern,
  Southern,
}

const hemisphereSeasons = {
  [Hemispheres[0]]: seasonsNorth,
  [Hemispheres[1]]: seasonsSouth,
}

const numberOfChosenMonth: number = readlineSync.keyInSelect(
  Object.keys(YearMonths),
  "Choose a month: ",
  { cancel: "EXIT" },
);

if (numberOfChosenMonth !== -1) {
  const numberOfChosenHemisphere: number= readlineSync.keyInSelect(
    Object.keys(Hemispheres).slice(2),
    "Choese a hemisphere: ",
    { cancel: "EXIT" }
  );

  if (numberOfChosenHemisphere !== -1) {
    const chosenMonth: YearMonths = Object.values(YearMonths)[numberOfChosenMonth];
    const chosenHemisphere = Hemispheres[numberOfChosenHemisphere];
  
    const seasons = Object.entries(hemisphereSeasons[chosenHemisphere])
      .filter(([, months]) => months.includes(YearMonths[chosenMonth]))
      .map(([season]) => season);
  
    console.log(`Month: ${chosenMonth}`);
    console.log(`Hemisphere: ${chosenHemisphere}`);
    console.log(`Seasons: ${seasons.join(', ')}`);
  }
}

console.log("Bye...");