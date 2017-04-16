export default function cancelFullscreen( o = document ) {
	(o.exitFullscreen || 
		o.webkitExitFullscreen ||
		o.mozCancelFullScreen ||
		o.msExitFullscreen ||
		o.oExitFullscreen ||
		function(){}).call( o )
}
