function contact_us(text, subject) 
{
	var lhs1 = "support";
	var lhs2 = "serpensoft";
	var rhs = "icloud";

	document.write("<a href=\"mailto");
	document.write(":" + lhs1 + "." + lhs2 + "@");
	document.write(rhs + ".com" + "?subject=" + subject + "\">" + text + "<\/a>");
}

function popup(name) 
{
	$(name).magnificPopup(
	{
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		image: 
		{
			verticalFit: true
		},
		gallery: 
		{
			enabled: true,
			navigateByImgClick: true
		}
	});
}