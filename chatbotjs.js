function doGet(e) { return HtmlService.createHtmlOutputFromFile('chatbot'); } function processMessage(message) 
$(document).ready(function() {
	$('.chat_icon').click(function() {
		$('.chat_box').toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});
