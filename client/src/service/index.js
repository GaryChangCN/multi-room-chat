export function fetch(){
	return new Promise((resolve,reject)=>{
		setTimeout(function () {
			resolve(3);
		}, 2000);
	});
}