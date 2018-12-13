import { writeFile } from "fs";

const writeFileP = (fileName: string, data: string): Promise<void> =>
  new Promise<void>((resolve, reject) =>
    writeFile(fileName, data, err => (err ? reject(err) : resolve()))
  );

export = async (
  log: string,
  {
    fileName = "error.log",
    date = new Date()
  }: { fileName?: string; date?: Date } = {}
): Promise<void> =>
  writeFileP(
    fileName,
    `[${date.getFullYear()}-${date.getMonth()}-${date.getDate()}|${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}] ${log}`
  );
