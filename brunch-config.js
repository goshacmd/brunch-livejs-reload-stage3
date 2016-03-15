module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react'],
      plugins: [
        ["react-transform", {
          transforms: [{
            "transform": "livereactload/babel-transform",
            "imports": ["react"]
          }]
        }]
      ]
    },
    autoReload: {
      liveJs: true
    }
  }
};
