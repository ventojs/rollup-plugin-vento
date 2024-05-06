import vento from "ventojs";
import { extname } from "path";

export default function dustjs(options = {}) {
  const env = vento(options);
  env.tags.unshift(notSupported("import"));
  env.tags.unshift(notSupported("include"));
  env.tags.unshift(notSupported("export"));

  return {
    name: "vento",
    transform(source, path) {
      if (extname(path) === ".vto") {
        const template = env.compile(source, path);
        return `
          const __file = ${JSON.stringify(path)};
          const __defaults = {};
          const __env = {
            cache: new Map(),
            createError(_f, _s, _p, cause) {
              return cause;
            },
            utils: {
              ${
          Object.entries(env.utils).map(([key, value]) => {
            return `${key}: ${value.toString()}`;
          }).join(",")
        }
            },
            filters: {
              
            }
          };
          export default ${template.toString()};
          `;
      }
    },
  };
}

function notSupported(name) {
  return (_env, code) => {
    if (!code.startsWith(`${name} `)) {
      return;
    }

    throw new Error(
      `"{{ ${name} }}" tag is not supported yet by rollup plugin.`,
    );
  };
}
