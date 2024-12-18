
document.querySelectorAll('.sidebar-tigger').forEach(function(trigger) {
	trigger.addEventListener('click', function() {
	  document.body.classList.toggle('sidebar-open');
	});
  });