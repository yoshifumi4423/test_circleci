import hello from "./hello"

const sleep = (ms, someFunction) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(someFunction())
    }, ms)
  })
}

const asyncHello = async (ms, something) => {
  try {
    if (typeof ms === "number" && isFinite(ms)) {
      return sleep(ms, () => hello(something))
    }
    throw new Error("Error: ms is not number.")
  } catch (error) {
    throw error
  }
}

export default asyncHello
