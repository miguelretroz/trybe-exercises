enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive
console.log(newStudentStatus);

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const okIndex = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok);
console.log(okIndex);
console.log(stringBadRequest);


enum directionsGamePad {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

console.log(directionsGamePad.UP);
console.log(directionsGamePad["LEFT"]);
