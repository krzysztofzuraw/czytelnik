import { Command, flags } from "@oclif/command";
import { glob } from "glob";
import * as path from "path";
import * as fs from "fs";

const TAG_OPEN = "<!-- CZYTELNIK-START -->";
const TAG_CLOSE = "<!-- CZYTELNIK-END -->";

const formatFilename = (input: string) => {
  const [filename] = input.split(".md");
  return `${filename[0].toUpperCase()}${filename.slice(1)}`;
};

class Czytelnik extends Command {
  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    inputFolder: flags.string({
      char: "f",
      default: ".",
      required: true,
      description: "path to input folder",
    }),
    outputFile: flags.string({
      char: "o",
      default: "README.md",
      required: false,
      description: "path to output file",
    }),
  };

  async run() {
    const { flags } = this.parse(Czytelnik);

    glob(
      "**/*.md",
      {
        cwd: path.resolve(flags.inputFolder),
        ignore: ["README.md", "backup.sh"],
      },
      (err, files) => {
        if (err) {
          this.log(err.message ?? "error");
        }

        const content = files
          .map((file) => `- [${formatFilename(file)}](./${file})`)
          .join("\n");
        const readme = fs.readFileSync(flags.outputFile, "utf8");
        const indexBefore = readme.indexOf(TAG_OPEN) + TAG_OPEN.length;
        const indexAfter = readme.indexOf(TAG_CLOSE);
        const readmeContentChunkBreakBefore = readme.substring(0, indexBefore);
        const readmeContentChunkBreakAfter = readme.substring(indexAfter);

        const readmeNew = `
${readmeContentChunkBreakBefore}
${content}
${readmeContentChunkBreakAfter}
        `;
        fs.writeFileSync(flags.outputFile, readmeNew.trim());
      }
    );
  }
}

export = Czytelnik;
