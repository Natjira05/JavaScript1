 
 function totalVolume (input) {
  if (toString.call(input) !== "[object Array]")
  return false;

    var total = 0 ;
    for ( var i = 0 ; i < input.length ; i++)
    {
      if (isNaN(input[i])){
        continue ;
      }
      total += Number(input[i]);
    }
    return total ;
 }

 console.log(totalVolume([4, 2, 4],[3, 3, 3], [1, 1, 2],[2, 1, 1]));
 console.log(totalVolume([2, 2, 2], [2, 1, 1]));
 console.log(totalVolume([1, 1, 1]));