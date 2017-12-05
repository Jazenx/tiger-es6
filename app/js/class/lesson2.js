{
  let a, b, rest;
  [a, b] = [1, 2];
  console.log(a, b);
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest);
}

{
  let a, b;
  ({
    a,
    b
  } = {
    a: 1,
    b: 2
  });
  console.log(a, b)
}


{
  let a, b, c, rest;
  [a, b, c = 3] = [1, 2];
  //  c如果没有声明则为undifined。
  console.log(a, b, c);
}

{
  // 变量的交换。
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log(a, b);
}

{
  // 接受函数返回值。
  function f() {
    return [1, 2]
  }
  let a, b;
  [a, b] = f();
  console.log(a, b)
}

{
  //返回多个值，选择性的获取需要的值。
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a, , , b] = f();
  console.log(a, b)
}

{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a, ...b] = f();
  console.log(a, b)
}

{
  let a = {
    p: 42,
    q: true
  }
  let {p, q} = a;
  console.log(p,q)
}

{
  let {a=10, b=2} = {a: 3};
  console.log(a, b);
}

{
  let metaData = {
    title: 'desc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]} = metaData;
  console.log(esTitle, cnTitle);
}