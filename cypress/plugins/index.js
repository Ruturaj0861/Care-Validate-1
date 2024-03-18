// cypress/plugins/index.js

// Export the module
module.exports = (on, config) => {
    // Example of adding a plugin to log additional information
    on('task', {
      logMessage(message) {
        console.log(message);
        return null; // Return null to indicate the task is complete
      }
    });
  };
  