const winston = require("winston");
const colors = require("colors");

class logger {
  constructor(LoggingFile) {
    this.logger = winston.createLogger({
      transports: [new winston.transports.File({ filename: LoggingFile })],
    });
  }

  log(Text) {
    let d = new Date();
    this.logger.log({
      level: "info",
      message: Text,
    });
    console.log(
      colors.gray(
        `[${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours() > 12 ? d.getHours() - 12 : d.getHours()}:${d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()} ${d.getHours() > 12 ? "PM" : "AM"}]`
      ) + " " + colors.cyan(Text)
    );
  }
}

module.exports = logger;