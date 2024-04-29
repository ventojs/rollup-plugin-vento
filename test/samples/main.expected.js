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

const result = template({ name: "Vento" });
console.log(result);
