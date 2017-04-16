export default function fullscreenElement( o = document ) {
	return (o.fullscreenElement ||
		o.webkitFullscreenElement ||
		o.mozFullScreenElement ||
		o.msFullscreenElement ||
		o.oFullscreenElement)
}
