function classof(obj) {
	if (obj == null) 
		return "Null";
	if (obj == undefined) 
		return "Undefined";
	return Object.prototype.toString.call(obj).slice(8, -1);
}

Function.prototype.getName = function() {
	if ("name" in this)
		return this.name;
	return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
};

function type(obj) {
	var typ;
	var cla;
	var name;

	if (obj == null) 
		return "null";
	if (obj != obj) 
		return "NaN";
	if ((typ = typeof obj) != "object")
		return typ;
	if ((cla = classof(obj)) != "Object")
		return cla;
	if (obj.constructor && typeof obj.constructor == "function" && (name = obj.constructor.getName()))
		return name;

	return "Object";
}
