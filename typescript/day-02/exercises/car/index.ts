import Car from "./Car";
import Colors from "./Colors";
import Doors from "./Doors";
import Directions from "./Directions";

const gol = new Car("Volkswagen", Colors.Silver, 4);

gol.openTheDoor(Doors.FrontLeft);
gol.closeTheDoor(Doors.FrontLeft);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Left);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Right);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Right);
gol.speedUp();
gol.speedDown();
gol.stop();

gol.openTheDoor(Doors.RearRight);
gol.closeTheDoor(Doors.RearRight);

gol.speedUp();
gol.speedDown();
gol.turn(Directions.Right);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Left);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Right);
gol.speedUp();
gol.speedDown();
gol.stop();

gol.openTheDoor(Doors.RearRight);
gol.closeTheDoor(Doors.RearRight);
gol.speedUp();