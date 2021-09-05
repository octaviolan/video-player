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
  console.log('le diste click al boton de play')
}

function handlePause() {
  $video.pause()
  $pause.hidden = true
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