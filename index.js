import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the amount of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a number";
        }
        else if (input > 21600) {
            return "You can set a timer for a duration of up to 6 hours.";
        }
        else {
            return true;
        }
    }
});
const input = res.userInput;
function startTime(val) {
    const intervalTime = new Date();
    intervalTime.setSeconds(intervalTime.getSeconds() + val);
    const timerInterval = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            clearInterval(timerInterval);
            process.stdout.write("Timer has expired\n");
            process.exit();
        }
        const hours = Math.floor(timeDiff / 3600);
        const minutes = Math.floor((timeDiff % 3600) / 60);
        const seconds = timeDiff % 60;
        process.stdout.write(`\r${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
