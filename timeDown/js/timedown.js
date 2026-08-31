const saleInfo = document.querySelector(".time-down")

//functions
const formateTime = (t) => t.toString().padStart(2, "0")
const hourMinuteSec = (time) => {
  const duration = time / 1000
  const hours = Math.trunc(duration / 3600)
  const minutes = Math.trunc((duration - hours * 3600) / 60)
  const seconds = Math.trunc(duration % 60)
  return `Left ${formateTime(hours)} : ${formateTime(minutes)} : ${formateTime(
    seconds
  )}`
}

window.addEventListener("load", () => {
  const p = document.createElement("p")
  saleInfo.append(p)
  const clearTimer = setInterval(() => {
    const period = new Date("2024-6-19").getTime() - new Date().getTime()
    p.textContent = hourMinuteSec(period)
  }, 1000)
})
