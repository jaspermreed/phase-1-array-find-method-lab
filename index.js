

const superbowlWin = record => {
  // let result = record.find(obj => obj.result === 'W')
  let result = record.find(function(obj) {
    return obj.result === 'W'
  })
  // if(result === undefined){
  //   return undefined
  // } else {
  //   return result.year
  // }

  return !!result ? result.year : undefined
}

// let obj = {year: "2018", result: "W"}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
//   //...
// ]


