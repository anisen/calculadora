$(document).ready(function(){
	$("input:button").click(function(){
		btn= $(this).val();
		pantalla= $("#resultado").val();
		if(ntn=="C"){
			$("#resultado").val("");
		}else{
			if (btn=="=") {
				$("#resultado").val(eval(pantalla));
			}else{
				$("#resultado").val(pantalla + btn);
			}
		}
	})
});