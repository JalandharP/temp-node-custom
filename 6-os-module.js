const os = require('os');

// current user Info
console.log("User Info:", os.userInfo());

// system uptime in second
console.log("The System update time is", os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
// system uptime in second
console.log("The Current OS", currentOS);

