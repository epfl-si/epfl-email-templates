/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2021.
 */

module.exports = {
  example: {
    files: [{
      expand: true,
      cwd: 'www/pages/',
      src: ['**'],
      dest: 'docs/examples',
      nonull: true
    }]
  }
};
