function afficher(){
	$('.button').click(function (){
		var first = $('#first_name').val();
		var last = $('#last_name').val();
		var city = $('#city').val();
		$('#username').html(first +' '+last+' qui habite à '+city+'.');
})
}

$(document).ready(function(){
	afficher();
});