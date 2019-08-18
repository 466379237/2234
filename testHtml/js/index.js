var testObject={
		method:function(data){
			console.log(data)
		},
		method2:function(){
			console.log("这里是方法2")
			}
	}
	
	var testObject2={
		
		method2:function(){
			console.log("这里是testobject2方法2")
			}
	}
	
	var jg=$.extend({},testObject,testObject2)
	jg.method2("222");
	testObject.method2("222");
	
	function test (){
		console.log(1)
	}
	function test (){
		console.log(2)
	}
	
	
	$("#left").click(
		function(){test()}
	)