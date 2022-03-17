#!/usr/bin/node --experimental-specifier-resolution=node

import StyleDictionary from "style-dictionary";

import * as transforms from "./src/transforms";
import * as transformGroups from "./src/transformGroups";

transforms.register();
transformGroups.register();

const SOURCE = ["tokens/colors.json", "tokens/component.json"];
const includeRefs = process.argv.slice(2)[0] === "refs";

if (includeRefs) {
  SOURCE.push("tokens/box-shadows.refs.json");
} else {
  SOURCE.push("tokens/box-shadows.no-refs.json");
}

StyleDictionary.extend({
  source: SOURCE,
  platforms: {
    core: {
      prefix: "bse",
      transformGroup: "bse/web",
      buildPath: "dist/css/",
      files: [
        {
          destination: `variables.core.css`,
          format: "css/variables",
          options: {
            outputReferences: true,
            showFileHeader: false,
          },
        },
      ],
    },
  },
}).buildAllPlatforms();
