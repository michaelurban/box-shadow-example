import StyleDictionary from "style-dictionary";

import * as boxShadowTransform from "./box-shadow.transform";

export function register() {
  StyleDictionary.registerTransform({
    name: "bse/box-shadow",
    type: "value",
    transitive: true,
    matcher: boxShadowTransform.matcher,
    transformer: boxShadowTransform.transformer,
  });
}
