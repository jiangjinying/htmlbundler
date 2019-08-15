const isPhone = function(phone) {
		var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
		if (!myreg.test(phone)) {
			return false;
		} else {
			return true;
		}
	},
	isEmail = function(str) {
		if (str == null) return;
		var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
		if (!reg.test(str)) {
			return false;
		} else {
			return true;
		}
	}