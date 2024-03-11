/**
 * @typedef {Object} Page
 * @property {string} name 
 * @property {string} path 
 * @property {Array.<{ name: string, path: string }>} subpages 
 * 
 * @const {{ pages: Array.<Page> }}
 */
const data = {
  pages: [
    {
      name: 'CHU',
      path: 'chu.html',
      subpages: [
        { name: 'Geografia', path: 'geografia.html' },
        { name: 'Historia', path: 'historia.html' }
      ]
    },
    {
      name: 'CNA',
      path: 'cna.html',
      subpages: [
        { name: 'Fisica', path: 'fisica.html' },
        { name: 'Quimica', path: 'quimica.html' },
        { name: 'Biologia', path: 'biologia.html' }
      ]
    },
    {
      name: 'Matematica',
      path: 'matematica.html',
      subpages: []
    },
    {
      name: 'Linguagens',
      path: 'linguagens.html',
      subpages: [
        { name: 'Portugues', path: 'portugues.html' },
        { name: 'Ingles', path: 'ingles.html' }
      ]
    }
  ]
}