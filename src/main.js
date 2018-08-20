//usando commonjs
//const Pessoa = require('./pessoa')
//usando ECMAscript
import Pessoa from './pessoa' 
import './modules/moduleA'

const atendente = new Pessoa
console.log(atendente.cumprimentar())