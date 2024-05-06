const __file = "/Users/oscarotero/www/ventojs/rollup-plugin-vento/test/samples/template.vto";
          const __defaults = {};
          const __env = {
            cache: new Map(),
            createError(_f, _s, _p, cause) {
              return cause;
            },
            utils: {
              toIterator: function toIterator(
// deno-lint-ignore no-explicit-any
item, withKeys = false) {
    if (item === undefined || item === null) {
        return [];
    }
    if (Array.isArray(item)) {
        return withKeys ? Object.entries(item) : item;
    }
    if (typeof item === "function") {
        return toIterator(item(), withKeys);
    }
    if (typeof item === "object" && item !== null) {
        if (typeof item[Symbol.iterator] === "function") {
            if (withKeys) {
                return iterableToEntries(item);
            }
            return item;
        }
        if (typeof item[Symbol.asyncIterator] === "function") {
            if (withKeys) {
                return asyncIterableToEntries(item);
            }
            return item;
        }
        return withKeys ? Object.entries(item) : Object.values(item);
    }
    if (typeof item === "string") {
        return toIterator(item.split(""), withKeys);
    }
    if (typeof item === "number") {
        return toIterator(new Array(item).fill(0).map((_, i) => i + 1), withKeys);
    }
    return toIterator([item], withKeys);
}
            },
            filters: {
              
            }
          };
          async function template (it) {
        let __pos = 0;
        try {
          it = Object.assign({}, __defaults, it);
          const __exports = { content: "" };
          __exports.content += "<ul>\n  ";
__pos = 7;
for (let number of __env.utils.toIterator(8)) {
  __exports.content += "\n  <li>";
  __pos = 35;
  __exports.content += number ?? "";
  __exports.content += " - ";
  __pos = 50;
  __exports.content += it.name ?? "";
  __exports.content += "</li>\n  ";
}
__exports.content += "\n</ul>\n";

          return __exports;
        } catch (cause) {
          const template = __env.cache.get(__file);
          throw __env.createError(__file, template?.source || "", __pos, cause);
        }
      }

const result = await template({ name: "> Vento" });

document.body.innerHTML = result.content;
