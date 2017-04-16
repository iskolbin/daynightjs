export default function requestFullscreen( o ) {
	const f = (o.requestFullscreen ||
		o.webkitRequestFullscreen ||
		o.mozRequestFullScreen ||
		o.msRequestFullscreen ||
		o.oRequestFullscreen ||
		function(){ return false })
		f.call(o);
}
