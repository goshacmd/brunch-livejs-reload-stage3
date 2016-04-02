const reactLiveJS = require('react-livejs/config');

module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react'],
      env: {
        development: {
          plugins: [
            reactLiveJS
          ]
        }
      }
    },
    autoReload: {
      liveJs: true
    }
  }
};
