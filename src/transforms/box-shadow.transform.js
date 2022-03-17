// Validation/parsing/error handling/etc excluded for brevity.

export function transformer(token) {
  return token.value
    .map((val) => {
      const ret = [];

      if (val.inset) {
        ret.push("inset");
      }

      ret.push(val.offsetX, val.offsetY);

      if (val.blurRadius) {
        ret.push(val.blurRadius);
        if (val.spreadRadius) {
          ret.push(val.spreadRadius);
        }
      }

      if (val.color) {
        ret.push(val.color);
      }

      return ret.join(" ");
    })
    .join(", ");
}

export function matcher(token) {
  return token?.attributes?.category === "box-shadow";
}
