function selfP(fn) {
  let status =  'pending'

  fn.call
}


new selfP((resolve, reject) => {
  console.log('hhh', resolve, reject)
})