import { requestFullscreen, cancelFullscreen, isFullscreen, addFullscreenChangeListener } from './util'

export default class FullscreenButton {
	constructor( scene, x, y ) {
		this.scene = scene
		this.button = scene.createObject( ['expand.png','contract.png'], x, y )
		this.button.interactive = true
		this.button.on( 'pointerup', () => this.switchFullscreen() )
		addFullscreenChangeListener( () => this.updateFullscreenStyle() )
	}

	switchFullscreen() {
		if ( isFullscreen() ) {
			cancelFullscreen()
		} else {
			requestFullscreen( this.scene.app.view )
		}
		this.updateFullscreenStyle()
	}

	updateFullscreenStyle() {
		if ( !isFullscreen() ) {
			this.button.gotoAndStop( 0 )
			this.scene.app.view.style['border-radius'] = '8px'
		} else {
			this.button.gotoAndStop( 1 )
			this.scene.app.view.style['border-radius'] = '0px'
		}
	}
}
