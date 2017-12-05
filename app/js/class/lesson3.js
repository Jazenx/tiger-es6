{
  // es5
  let regx = new RegExp('xyz', 'i');
  let regx2 = new RegExp(/xyz/i);
  console.log(regx.test('xyz123'), regx2.test('xyz123'))

  // es6
  // es6后面的修饰符会覆盖前面正则表达式所使用的修饰符
  let regx3 = new RegExp(/xyz/ig,'i');
  console.log(regx3.flags);
}

{
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;
  console.log('one', a1.exec(s), a2.exec(s));
  console.log('two', a1.exec(s), a2.exec(s));
  // sticy看是否使用y修饰符
  console.log(a1.sticky, s2.sticky);
}