$(document).ready(function() {
  
  var blank_form = function(){
  	$('#name').val('');
  	$('#address').val('');
  	$('#city').val('');
  	$('#phone').val('');
  	$('#email').val('');
  }

  $('.new_contact').on('click', function(){
  	$(this).addClass('selected');
  	$('.contact').removeClass('selected');
  	blank_form();
  });

  $('.contact').on('click', function(){
  	$('.new_contact').removeClass('selected');
  	$('.contact').removeClass('selected');
  	$(this).addClass('selected');

  	var id = $(this).data('id')
  	$.get('/contact', {id: id}, function(response){
  		$('#name').val('' + response.name + '');
  		$('#address').val('' + response.address + '');
  		$('#city').val('' + response.city_state + '');
  		$('#phone').val('' + response.phone_number + '');
  		$('#email').val('' + response.email + '');
  		$('#contact_id').remove();
  		$('#contact_form').prepend('<input type="hidden" name="id" id="contact_id" value=' + response.id + '>')
  	})
  })

  $('#delete').on('click', function(e){
  	e.preventDefault();
  	var contact = $('.contact').closest('.address_list').find('.selected').data('id')
  	if (contact){
  		$.post('/delete', {id: contact}, function(){
  			blank_form();
  			location.reload();
  		})
  	}
  })


});
