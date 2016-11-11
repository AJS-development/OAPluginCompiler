module.exports = {
// [General]
name: "", // Name of plugin REQUIRED
author: "", // author REQUIRED
description: '', // Desciprtion
minVersion: '', // minimum version requirements (optional)
version:  '', // version REQUIRED

// [Functions]
init: function (data) {
  // init, Used to do stuff such as overriding things
},
beforeSpawn: function(data) {
   return true;
}
}
