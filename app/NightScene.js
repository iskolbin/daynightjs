import { range, random, flatten } from './util'
import Scene from './Scene'
import Star from './Star'
import Moon from './Moon'
import FullscreenButton from './FullscreenButton'

export default class NightScene extends Scene {
	constructor( app ) {
		super( app, 0x070220 )
		this.moon = new Moon( this, 200, 200 )
		this.starsInRow = 5
		this.starsInCol = 3
		const [dx,dy] = [this.app.width / this.starsInRow, this.app.height / this.starsInCol]
		this.stars = flatten( range( this.starsInCol )
			.map( row => range( row === 0 ? 1 : 0, this.starsInRow )
				.map( col => new Star( this, dx * (col+0.5), dy * (row+0.5) ))))
		this.stars.forEach( o => {
			const [x,y] = o.pos
			o.pos = [x + random.randomFloat( -0.25 * dx, 0.25 * dx ), y + random.randomFloat( -0.25 * dx, 0.25 * dy )]
			o.scale = random.randomFloat( 0.5, 0.75 )
			o.rotation = random.randomFloat( Math.PI*2 )
		})
		this.fullscreen = new FullscreenButton( this, this.app.width - 48, 48 )
	}
}
