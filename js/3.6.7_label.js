//测试 label 标签
function forBreak(){
	var num = 0;
	outermost:
	for (var i = 0; i < 10; i++) {
		for(var j = 0; j < 10; j++){
			if(i == 5 && j == 5){
				break outermost;
			}
			num++;
		}
	}
	console.log(num);		//55
}
function forContinue(){
	var num = 0;
	outermost:
	for (var i = 0; i < 10; i++) {
		for(var j = 0; j < 10; j++){
			if(i == 5 && j == 5){
				break outermost;
			}
			num++;
		}
	}
	console.log(num);		//55
}
