const {  LocalStorage } = require('node-localstorage')

const localStorage = new LocalStorage('../../')
const KEY = 'chave'

module.exports = {KEY, localStorage}