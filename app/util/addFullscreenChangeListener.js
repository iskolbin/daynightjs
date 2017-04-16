export default function addFullscreenChangeListener( listener, o = document ) {
	['','moz','o','ms','webkit'].forEach( vendor => o.addEventListener( vendor + 'fullscreenchange', listener ))
}
