const validateCpfBefore = require("./validateCpf_before");
const validateCpfAfter = require("./validateCpf_after");

const cpf1 = '00000000000';
const cpf2 = '86446422799';
const cpf3 = '86446422784';
const cpf4 = '864.464.227-84';
const cpf5 = '91720489726';
const cpf6 = 'a1720489726';

console.log('\t\t', 'Before', ' After');
console.log(`"${cpf1}"`, '\t', validateCpfBefore.validate(`${cpf1}`), '\t', validateCpfAfter.validateCpf(`${cpf1}`));
console.log(`"${cpf2}"`, '\t', validateCpfBefore.validate(`${cpf2}`), '\t', validateCpfAfter.validateCpf(`${cpf2}`));
console.log(`"${cpf3}"`, '\t', validateCpfBefore.validate(`${cpf3}`), '\t', validateCpfAfter.validateCpf(`${cpf3}`));
console.log(`"${cpf4}"`,       validateCpfBefore.validate(`${cpf4}`), '\t', validateCpfAfter.validateCpf(`${cpf4}`));
console.log(`"${cpf5}"`, '\t', validateCpfBefore.validate(`${cpf5}`), '\t', validateCpfAfter.validateCpf(`${cpf5}`));
console.log(`"${cpf6}"`, '\t', validateCpfBefore.validate(`${cpf6}`), '\t', validateCpfAfter.validateCpf(`${cpf6}`));
