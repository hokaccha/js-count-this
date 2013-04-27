JavaScriptのコード内のthisが代入されている変数名の数をカウントするよ。

それだけだよ。

## Install

```
$ npm install -g git://github.com/hokaccha/js-count-this.git
```

## Example

### jQuery

```javascript
// target.js

foo.forEach(function() {
  var self = this;
});

Foo.prototype.bar = function() {
  var self = this;
};

var foo = this;
foo.bar.baz[0] = this;

bar = this;

var baz;
baz = this;

var xxx = this.fuga.piyo
  , hoge = this;

let letSelf = this;
const constSelf = this;
```

```
$ count-this target.js
self: 2
foo: 1
foo.bar.baz[0]: 1
bar: 1
baz: 1
hoge: 1
letSelf: 1
constSelf: 1
```
