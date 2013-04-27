var foo;
foo.bar.baz[0] = this;

var hoge = this.fuga.piyo, self = this;
let foo = this;
bar = this;

self['this']();

foo.forEach(function() {
  var self = this;
});

Foo.prototype.bar = function() {
  var self = this;
};
