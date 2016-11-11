'use strict';   // dont touch
// [General]
this.name = ""; // Name of plugin REQUIRED
this.author = ""; // author REQUIRED
this.description = 'Notifies the server if a player joins'; // Desciprtion
this.minVersion = ''; // minimum version requirements (optional)
this.version = ''; // version REQUIRED

// [Functions]
this.init = function (data) {
  // init, Used to do stuff such as overriding things
};
this.beforeSpawn = function(data) {
    return true;
}
module.exports = this; // dont touch
