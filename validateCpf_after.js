
function removeNotNumbers(str) {
	return str.replace(/\D/g, '');
}

function hasInvalidLength(str) {
	return str.length !== 11;
}

function validateCpf(str) {
	if(!str) return false;
	str = removeNotNumbers(str);
	if (hasInvalidLength(str)) return false;
	if (str.split("").every(c => c === str[0])) return false;
	let d1 = 0;
	let d2 = 0;
	let dg1 = 0;
	let dg2 = 0;
	let rest = 0;
	for (let nCount = 1; nCount < str.length - 1; nCount++) {
		const digito = parseInt(str.substring(nCount - 1, nCount));
		d1 = d1 + (11 - nCount) * digito;
		d2 = d2 + (12 - nCount) * digito;
	};
	rest = (d1 % 11);
	dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;
	d2 += 2 * dg1;
	rest = (d2 % 11);
	if (rest < 2)
		dg2 = 0;
	else
		dg2 = 11 - rest;
	let nDigVerific = str.substring(str.length - 2, str.length);
	let nDigResult = "" + dg1 + "" + dg2;
	return nDigVerific == nDigResult;
}

module.exports = {
	validateCpf
};