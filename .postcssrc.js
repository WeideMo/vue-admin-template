// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-sprites": {
      // stylesheetPath: './css',
      // spritePath: './dist/static/img',
      groupBy: function (image) {
        // Allow only png files
        if ((image.url).indexOf('/icon/') === -1) {
          return Promise.reject();
        } else {
          return Promise.resolve('common');
        }
      },
      filterBy:function(image){
        if ((image.url).indexOf('/icon/') === -1) {
          return Promise.reject();
        }
        return Promise.resolve();
      }
    },
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}

  }
}
