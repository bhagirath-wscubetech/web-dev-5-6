$(document).ready(
	function() {
		var textarea = $(".textarea");
	
		textarea.keyup(
			function() {
				var maxLeng = $(this).attr("maxlength");
				var textLeng = $(this).val().length;
				var remainLeng = maxLeng - textLeng;
				$(this).prev(".msg").text(`Only ${remainLeng} characters are left`);
			}
		)

	}
)