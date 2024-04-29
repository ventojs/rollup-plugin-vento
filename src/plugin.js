import vento from "ventojs";
import { extname } from 'path'

export default function dustjs (options = {}) {
  const env = vento(options);
  return {
    name: 'vento',
    transform (source, path) {
      if (extname(path) === '.vto') {
        const template = env.compile(source, path);
        return `export default ${template.toString()};`;
      }
    }
  }
}
