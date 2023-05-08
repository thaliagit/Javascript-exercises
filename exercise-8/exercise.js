function multiplyByTwo(value) {
  let number = 2;
  function inner(){
    let output = value * number;
    console.log(output);
  };
  inner();
};
multiplyByTwo(4);
