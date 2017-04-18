import DayNightApplication from './DayNightApplication'

document.addEventListener('DOMContentLoaded', () => {
	const app = new DayNightApplication()	
	document.getElementById( 'content' ).appendChild( app.view )
	window.addEventListener( 'resize', () => app.onResize() )
	//window.addEventListener( 'keydown', (e) => app.onKeydown(e) )
	//window.addEventListener( 'keyup', (e) => app.onKeyup(e) )
});
