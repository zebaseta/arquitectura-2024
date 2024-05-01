const fs = require("fs");

export class FileLogger {
  static log(data: string) {
    const fileLogPath = process.env.FILE_LOG_PATH;
    fs.appendFile(fileLogPath, data + "\n", (err: Error) => {
      if (err) {
        console.error("Error when save in file :", err);
        return;
      }
    });
  }
}
