const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  $backward.hidden = false
  $forward.hidden = false
  console.log('le diste click al boton de play')
}

function handlePause() {
  $video.pause()
  $pause.hidden = true
  $backward.hidden = true
  $forward.hidden = true
  $play.hidden = false
  console.log('le diste click al boton de pause')
}

$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handleBackward() {
  $video.currentTime -= 10
  console.log('10 seg para atras', $video.currentTime)
}

function handleForward() {
  $video.currentTime += 10
  console.log('10 seg para adelante', $video.currentTime)
}

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpDate)

const $progress = document.querySelector('#progress')

function handleLoaded() {
  $progress.max = $video.duration
  console.log('mi video ha cargado', $video.duration)
}

function handleTimeUpDate() {
  $progress.value = $video.currentTime
  // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value
  console.log('el valor es', $progress.value)
}



