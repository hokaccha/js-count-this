JavaScriptのコード内のthisが代入されている変数名の数をカウントするよ。

それだけだよ。

### jQuery

```
$ count-this jquery-2.0.0.js
target: 2
self: 2
ret.prevObject: 1
elements: 1
jQuery.propFix[this.toLowerCase()]: 1
event.delegateTarget: 1
set: 1
elem: 1
anim: 1
```

### Node.js

```
$ count-this node/lib/*
self: 82
socket: 5
parser: 4
this._handle.owner: 2
handle: 2
list: 1cluster.workers[this.id]: 1
handle.owner: 1
ee.domain: 1
src: 1
er.domainEmitter: 1
dest: 1
socket._httpMessage: 1
res: 1
req: 1
stream: 1
source: 1
b.domain: 1
```
