const obj = {
  a: 5,
  foo: function() {
    console.log(this.a);
  },
};

const missingThis = obj.foo;

console.log(obj.foo());
