import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import t from '@babel/types';
import nodePath from 'path';

const fileRegex = /\.(t|j)sx?$/;

let imports = [];
export default function Src2Import() {
  return {
    name: 'src2import',

    transform(code: string, path: string) {
      if (!fileRegex.test(path)) {
        return code;
      }
      const ast = parser.parse(code, {sourceType: 'module'});
      traverse(ast, {
        ObjectProperty(path) {
          if (!t.isIdentifier(path.node.key, {name: 'src'}) || !t.isStringLiteral(path.node.value)) {
            return;
          }
          const {value} = path.node.value;
          if (/^\w+:\/\//.test(value)) {
            return;
          }
          const ident = t.identifier('___src2import_' + nodePath.basename(value).replace(/[\.\-\@]/g, '_'));

          console.log('value', value);

          if (!imports.some(item => item[1] === value)) {
            imports.push([ident, value]);
          }
          path.node.value = ident;
        },
        Program: {
          enter() {
            imports = [];
          },
          exit(path) {
            path.unshiftContainer(
              'body',
              imports.map(([ident, path]) => {
                return t.importDeclaration([t.importDefaultSpecifier(ident)], t.stringLiteral(path));
              }),
            );
          },
        },
      });
      const output = generate(ast);
      return output.code;
    },
  };
}
