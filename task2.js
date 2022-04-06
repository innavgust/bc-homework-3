array = [];
for (let i = 0; i <= 9; i++) {
  array.push(Math.round(Math.random() * 100));
}

function advancedFilter(arr) {
  const filtItems = array.filter((item) => (item % 3 === 0) && (item > 0));

  const finalArr = filtItems.map((num) => num*10);

  return (finalArr);
}

let result = advancedFilter(array);
console.log(result);
