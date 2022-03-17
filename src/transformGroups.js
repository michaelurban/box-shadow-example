import StyleDictionary from "style-dictionary";

const TRANSFORMS_GROUP_BSE_WEB = [
  "attribute/cti",
  "name/cti/kebab",
  "bse/box-shadow",
];

export function register() {
  StyleDictionary.registerTransformGroup({
    name: "bse/web",
    transforms: TRANSFORMS_GROUP_BSE_WEB,
  });
}
