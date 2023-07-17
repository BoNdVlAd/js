async function getRandomChinese(length){
  let result = ''
  const sleep = () => (
    new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 50);
    })
  )
  while(length--){
        await sleep().then(()=>{
          const myDate = String(Date.now()).slice(-5)
          const sign = String.fromCharCode(myDate)
          result += sign
        })
  }
  return result
}

getRandomChinese(5).then((res)=> console.log(res))
