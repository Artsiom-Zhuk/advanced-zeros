module.exports = function getZerosCount(number, base) {
// your implementation
	var j = 0;
	var i = 2;
	var arrLaidOutNum = [];
	var arrNum = [];
	var obj = {};
	var arrResNum = [];
	var i1 = 0;

	do {
		if (base % i === 0) {
			arrLaidOutNum[j] = i;
			j++;
			base = base / i;
		}
		else {
			i++;
		}
	} while (i <= base);

	for (var i = 0; i < arrLaidOutNum.length; i++) {
		var key = arrLaidOutNum[i];
		if (obj[key]) {
			obj[key] += 1;
		} else {
			obj[key] = 1;
		}
	}

	var arrNumFromObj = Object.keys(obj);

	for(var i = 0; i < arrNumFromObj.length; i++) {
		var result = 0;
		var index = arrNumFromObj[i];
		var sumResult = 0;
		do {
			result = (number / index) - ((number / index) % 1);
			index = index * arrNumFromObj[i];
			sumResult += result;
		} while(result > 1)

		arrNum.push(sumResult);
	}

	for(var key in obj) {
		if(obj[key] >=2 ) {
			var x = arrNum[i1] / obj[key];
			var x = (Math.floor(x * 1) / 1)
			arrResNum.push(x);
			i1 ++;
		} else {
			arrResNum.push(Math.floor(arrNum[i1] * 1) / 1);
			i1 ++;
		}
	}

	return Math.min.apply(Math, arrResNum);
};

