import { Application, Container, Graphics, loader, ticker, extras } from 'pixi.js'
import { update as updateTweens } from 'tween.js'
import { Howl } from 'howler'
import NightScene from './NightScene'

const WIDTH = 1920
const HEIGHT = 1080

export default class DayNightApplication extends Application {

	constructor() {
		super( WIDTH, HEIGHT, { antialias: true } )
		this.width = WIDTH
		this.height = HEIGHT
		loader
			//.add( 'sounds', 'sounds.json' )
			.add( 'tilesheet', 'tilesheet.json' )
			.load((loader) => {
				this.initScenes()
				ticker.shared.add( () => this.update( ticker.shared.elapsedMS ))	
			})
	}

	initScenes() {
		// TODO
		//this.dayScene = new DayScene()
		this.nightScene = new NightScene( this )
	}

	update( dt ) {
		updateTweens()
	}
	
	createObject( images, x, y, parent = this.stage ) {
		const object = extras.AnimatedSprite.fromImages( images )
		object.x = x
		object.y = y
		object.anchor.x = 0.5
		object.anchor.y = 0.5
		if ( parent ) {
			parent.addChild( object )
		}
		return object
	}

	createContainer( x, y, parent = this.stage ) {
		const container = new Container()
		container.x = x
		container.y = y
		if ( parent ) {
			parent.addChild( container )
		}
		return container
	}

	createRect( x, y, w, h, fillColor = 0, parent = this.stage ) {
		const graphics = new Graphics()
			.beginFill( fillColor )
			.drawRect( 0, 0, w, h )
			.endFill()
		if ( parent ) {
			parent.addChild( graphics )
		}
		return graphics
	}

	onResize() {
	}
}
