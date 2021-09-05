let h = document.querySelector('.hr-hand')
let m = document.querySelector('.min-hand')
let s = document.querySelector('.sec-hand')

setInterval(() => {
  d = new Date()
  hrTime = d.getHours()
  minTime = d.getMinutes()
  secTime = d.getSeconds()

  hrRotation = 30 * hrTime + minTime / 2
  minRotation = 6 * minTime
  secRotation = 6 * secTime

  h.style.transform = `rotate(${hrRotation}deg)`
  m.style.transform = `rotate(${minRotation}deg)`
  s.style.transform = `rotate(${secRotation}deg)`
}, 1000)
