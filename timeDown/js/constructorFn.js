// constructor function

function NewEl(tag, parentId, place, txt = "", className = "") {
  ;(this.tag = tag),
    (this.parentId = parentId),
    (this.text = txt),
    (this.place = place),
    (this.className = className)
  this.createEl = function () {
    const parent = document.getElementById(this.parentId)
    const el = document.createElement(this.tag)
    if (this.text) el.textContent = this.txt
    if (className) el.classList.add(this.className)
    parent.insertAdjacentElement(this.place, el)
    return el
  }
}

function Timer(t) {
  this.time = t
  const duration = this.time / 1000
  this.formateTime = function (t) {
    return t.toString().padStart(2, "0")
  }
  this.hourMinuteSec = function (duration) {
    const hours = Math.trunc(duration / 3600)
    const minutes = Math.trunc((duration - hours * 3600) / 60)
    const seconds = Math.trunc(duration % 60)
    return `Left ${this.formateTime(hours)} : ${this.formateTime(
      minutes
    )} : ${this.formateTime(seconds)}`
  }
}

//setup event listeners
window.addEventListener("load", function () {
  const newTag = new NewEl("p", "time-down", "beforeend")
  const p = newTag.createEl()
})

window.addEventListener("load", () => {
  const p = document.createElement()
  saleInfo.append(p)
  const clearTimer = setInterval(() => {
    const period = new Date("2022-12-19").getTime() - new Date().getTime()
    p.textContent = hourMinuteSec(period)
  }, 1000)
})
