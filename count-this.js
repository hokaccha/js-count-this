var esprima = require('esprima');
var escodegen = require('escodegen');

module.exports = function(str) {
  var result = {};
  var ast = esprima.parse(str);

  //console.log( require('util').inspect(ast, true, null) );

  function increment(name) {
    if (result[name]) {
      result[name]++;
    }
    else {
      result[name] = 1;
    }
  }

  (function find(obj) {
    if (!obj) return;

    if (obj.type === 'VariableDeclaration') {
      obj.declarations.forEach(function(o) {
        if (o.init && o.init.type === 'ThisExpression') {
          increment(o.id.name);
        }
      });
    }
    else if (obj.type === 'ExpressionStatement'
            && obj.expression.operator === '='
            && obj.expression.right.type === 'ThisExpression') {
      increment(escodegen.generate(obj.expression.left));
    }
    else if (Array.isArray(obj)) {
      obj.forEach(function(o) {
        find(o);
      });
    }
    else if (typeof obj === 'object') {
      Object.keys(obj).forEach(function(k) {
        find(obj[k]);
      });
    }
  })(ast.body);

  return result;
};
