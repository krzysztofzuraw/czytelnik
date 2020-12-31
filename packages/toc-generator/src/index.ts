/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Command, flags } from "@oclif/command";
import { glob } from "glob";
import * as path from "path";

class TocGenerator extends Command {
  static description = "describe the command here";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    inputFolder: flags.string({
      char: "f",
      default: ".",
      required: true,
      description: "path to input folder",
    }),
    // flag with a value (-n, --name=VALUE)
    // name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    // force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(TocGenerator);

    glob(
      "**/*.md",
      { cwd: path.resolve(flags.inputFolder), ignore: "README.md" },
      (err, matches) => {
        if (err) {
          this.log(err.message ?? "error");
        }
        matches.forEach((match) => this.log(match));
      }
    );
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`);
    // }
  }
}

export = TocGenerator;
