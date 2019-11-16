const hello = something => {
  if (typeof something === "string") {
    return something ? `Hello ${something}` : "Hello"
  } else {
    throw new Error("Error: something is not String.")
  }
}

export default hello
