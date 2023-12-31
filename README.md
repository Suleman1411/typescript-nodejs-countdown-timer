# Node.js and Typescript Countdown Timer

This is a simple Node.js timer application that allows you to set a timer for a specific number of seconds, up to a maximum of 6 hours. It uses the `date-fns` library for date calculations and `inquirer` for user input.

## Features

- Set a timer for a specified number of seconds.
- Provides a visual countdown in the format `HH:MM:SS`.
- Timer expires when the countdown reaches zero, and a message is displayed.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Suleman1411/typescript-nodejs-countdown-timer
   ```

2. Change to the project directory:

   ```bash
   cd typescript-nodejs-countdown-timer
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

To start the timer, run the following command:

```bash
node index.js
```

You will be prompted to enter the number of seconds for the timer. The timer will start counting down, and the remaining time will be displayed in the console. Once the timer expires, a message will be shown, and the application will exit.

## Configuration

You can adjust the maximum timer duration by changing the `input > 21600` condition in the `validate` function of the `inquirer` prompt. By default, the maximum timer duration is set to 6 hours (21,600 seconds).

## Dependencies

- [date-fns](https://date-fns.org/): A library for working with dates in JavaScript.
- [inquirer](https://github.com/SBoudrias/Inquirer.js): A collection of common interactive command line user interfaces.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- Suleman Pervez
- GitHub: [Suleman1411](https://github.com/Suleman1411)

## Acknowledgments

Special thanks to the authors of the `date-fns` and `inquirer` libraries for their excellent work.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a descriptive commit message.
4. Push your changes to your fork.
5. Submit a pull request to this repository.

We welcome contributions and appreciate your help in making this project better.
