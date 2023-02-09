const test1 = "hApPy" ;
const test2 = "moveMENT" ;
const test3 = "shOrtCAKE" ;


function capToFront (text) {
  let char = text.split('')
  
  const uppercase = chars.filter((char) => char === char.toUpperCase())
  const lowercase = chars.filter((char) => char === char.toLowerCase())

  const result = [...uppercase, ...lowercase].join('')

  console.log(result)

  return result
}