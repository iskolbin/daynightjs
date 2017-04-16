import { requestFullscreen, cancelFullscreen, isFullscreen, addFullscreenChangeListener } from './util'
import { Tween } from 'tween.js'

export default class Moon {
	constructor( scene, x, y ) {
		this.scene = scene
		this.moon = scene.createObject( ['moon.png'], 200, 200 )
		this.glow = [[-10,-10],[-10,10],[30,-10],[30,10]].map( ([dx,dy]) => {
			const g = scene.createObject( ['moon.png'], 200, 200 )
			g.scale.x = g.scale.y = 1.1
			g.x += dx
			g.y += dy
			g.alpha = 0
			return g
		})
		this.moon.interactive = true
		this.moon.on( 'pointerup', () => this.animateMoon() )
	}

	animateMoon() {
		this.glow.forEach( g => new Tween( {rotation: 0, alpha: 0} )
			.to( {rotation: (0.95+0.05*Math.random())*Math.PI/16, alpha: 0.33}, 950 + Math.random()*50 )
			.repeat( 1 )
			.yoyo( true )
			.onUpdate( function() {
				g.rotation = this.rotation
				g.alpha = this.alpha
			})
			.start())
	}
}
