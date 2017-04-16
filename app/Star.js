import { Tween } from 'tween.js'

export default class Star {
	constructor( scene, x, y ) {
		this.container = scene.createContainer( x, y )
		this.star = scene.createObject( ['star.png'], 0, 0, this.container  )
		this.star.scale.x = this.star.scale.y = 0.7
		this.innerGlow = scene.createObject( ['star.png'], 0, 0, this.container )
		this.innerGlow.scale.x = this.innerGlow.scale.y = 0.8
		this.innerGlow.alpha = 0
		this.outerGlow = scene.createObject( ['star.png'], 0, 0, this.container )
		this.outerGlow.alpha = 0
		this.smile = scene.createObject( ['smile.png'], x, y )
		this.smile.alpha = 0
		this.star.interactive = true
		this.star.on( 'pointerup', () => this.activate() )
	}

	activate() {
		this.star.interactive = false
		this.activated = true
		const this_ = this
		new Tween( {alpha: 0} )
			.to( {alpha: 1}, 500 )
			.onUpdate( function() { 
				this_.innerGlow.alpha = this.alpha * 0.22
				this_.outerGlow.alpha = this.alpha * 0.11
				this_.smile.alpha = this.alpha 
				console.log( 22 )
			})
			.start()
		new Tween( {scale: 0.8} )
			.to( {scale: 0.9}, 350 + Math.random()*150 )
			.onUpdate( function() {
				this_.innerGlow.scale.x = this_.innerGlow.scale.y = this.scale
			})
			.repeat( Infinity )
			.yoyo( true )
			.start()
	}

	get pos() {
		return [this.container.x, this.container.y]
	}

	get scale() {
		return this.container.scale.x
	}

	get rotation() {
		return this.container.rotation
	}

	set pos( [x, y] ) {
		this.container.x = this.smile.x = x
		this.container.y = this.smile.y = y
	}

	set scale( scl ) {
		this.container.scale.x = this.container.scale.y = this.smile.scale.x = this.smile.scale.y = scl
	}

	set rotation( angle ) {
		this.container.rotation = angle
	}
}

