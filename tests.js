var index = require("./index.js")

if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 70) {
    console.log("The height is correct")
} else if (index.height > 70){
    console.log("Wow, you're taller than I expected")
} else {
  console.log("Wow, you're shorter than I expected")
}
