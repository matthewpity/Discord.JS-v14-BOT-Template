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
      message: `${d.getHours()}:${d.getMinutes} - ${d.getDate()}.${d.getMonth()}.${d.getFullYear()} | Info: ` + Text,
    });
    console.log(
      colors.gray(
        `${d.getDate()}.${d.getMonth()}.${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}`
      ) + colors.cyan(" | " + "Info:" + " " + Text)
    );
  }
}

module.exports = logger;