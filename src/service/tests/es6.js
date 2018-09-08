import got from "got";
import fs from "fs";

export default async function(url, outputFile) {
  got.stream(url).pipe(fs.createWriteStream(outputFile));
}
