import { Tween } from 'tween.js'

export default class Star {
	constructor( scene, x, y ) {
		this.container = scene.createContainer( x, y )
		this.star = scene.createObject( ['star.png'], 0, 0, this.container  )
		this.star.scale.x = this.star.scale.y = 0.7
		this.star.interactive = true
		this.star.on( 'pointerup', () => this.activate() )
		this.innerGlow = scene.createObject( ['star.png'], 0, 0, this.container )
		this.innerGlow.scale.x = this.innerGlow.scale.y = 0.8
		this.innerGlow.alpha = 0
		this.outerGlow = scene.createObject( ['star.png'], 0, 0, this.container )
		this.outerGlow.alpha = 0
		this.smile = scene.createObject( ['smile.png'], x, y )
		this.smile.alpha = 0

		const this_ = this

		this.glowTween = new Tween( {scale: 0.8} )
			.to( {scale: 0.9}, 350 + Math.random()*150 )
			.onUpdate( function() {
				this_.innerGlow.scale.x = this_.innerGlow.scale.y = this.scale
			})
			.repeat( Infinity )
			.yoyo( true )

		this.showSmileTween = new Tween( {alpha: 0} )
			.to( {alpha: 1}, 500 )
			.onUpdate( function() {
				this_.innerGlow.alpha = this.alpha * 0.22
				this_.outerGlow.alpha = this.alpha * 0.11
				this_.smile.alpha = this.alpha
			})

		this.scaleTween = null
	}

	animateScaling() {
		if ( this.scaleTween === null ) {
			const this_ = this
			this.scaleTween = new Tween( {scale: 0.7} )
				.to( {scale: 1.1}, 300 )
				.onUpdate( function() {
					let {scale} = this
					if ( scale > 0.9 ) {
						scale = 1.8 - scale
					}
					this_.star.scale.x = this_.star.scale.y = scale
				})
				.onComplete( function() {
					this_.star.interactive = true
					this_.scaleTween = null
				})
				.start()
		}
	}

	activate() {
		this.activated = true
		this.glowTween.start()
		this.showSmileTween.start()
		this.animateScaling()
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

