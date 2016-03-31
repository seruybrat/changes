var elem = document.getElementsByClassName ('col');
	for (var i = 0; i<elem.length;i++) {
		elem[i].addEventListener('click', function () {
			for (var j = 0; j<elem.length;j++) {
				elem[j].classList.remove('active');
			}
			this.classList.add ('active');}
			)};



	  $(document).ready(function(e) {
try {
$("body select").msDropDown();
} catch(e) {
alert(e.message);
}
});
  