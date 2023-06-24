import { stringifyChromeRecording } from "@wdio/chrome-recorder";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as fs from "fs/promises";
import { read } from "fs";

const argv = yargs(hideBin(process.argv))
  .options("recording", {
    alias: "r",
    description: "Chrome recording file",
    type: "string",
    demandOption: true,
  })
  .option("output", {
    alias: "o",
    description: "Generated test output",
    type: "string",
    demandOption: true,
  })
  .help()
  .alias("help", "h").argv;

async function readFile() {
  try {
    await fs
      .readFile(argv.recording, {
        encoding: "utf8",
      })
      .then(async (data) => {
        const testObj = JSON.parse(data);
        const stringifiedContent = await stringifyChromeRecording(
          JSON.stringify(testObj)
        );
        fs.writeFile(argv.output, stringifiedContent, (err) => {
          if (err) {
            console.log(err);
          }
        });
        console.log(stringifiedContent);
      });
  } catch (err) {
    console.log(err);
  }
}
readFile();

/*
console.log(stringifiedContent);
console.log(argv.recording);
console.log(argv.output);
*/
