/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2021.
 */

module.exports = {
  includes: {
    files: [{
      cwd: 'src',
      expand: true,
      src: 'pages/*.hbs',
      dest: 'www/',
      ext: '.html'
    }],
    partials: 'src/partials/**/*.hbs',
    globals: [{
      YEAR: (new Date()).getFullYear().toString()
    }]
  }
};
