const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')
let n = 1

function f1(e) {
  const t = e.currentTarget
  setTimeout(() => {
    t.classList.remove('x')
  }, n * 1000)
  n++
}

function f2(e) {
  const t = e.currentTarget
  setTimeout(() => {
    t.classList.add('x')
  }, n * 1000)
  n++
}

level1.addEventListener('click', f1, true)

level1.addEventListener('click', f2, false)

level2.addEventListener('click', f1, true)

level2.addEventListener('click', f2, false)

level3.addEventListener('click', f1, true)

level3.addEventListener('click', f2, false)

level4.addEventListener('click', (e) => {
  // e.stopImmediatePropagation()
  f1(e)
}, true)

level4.addEventListener('click', (e) => {
  // e.stopPropagation()
  f2(e)
}, false)

level5.addEventListener('click', f1, true)

level5.addEventListener('click', f2, false)

level6.addEventListener('click', f1, true)

level6.addEventListener('click', f2, false)

level7.addEventListener('click', f1, true)

level7.addEventListener('click', f2, false)