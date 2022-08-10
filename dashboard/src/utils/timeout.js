export function wait (timeMs) {
  // a Promise vai se resolver no tempo passado (timeMs)
  return new Promise((resolve) => {
    setTimeout(resolve, timeMs)
  })
}
