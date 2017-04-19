export default class Scene {
	constructor( app, background = 0 ) {
		this.app = app
		this.container = app.createContainer( 0, 0 )
		this.background = app.createRect( 0, 0, app.width, app.height, background, this.container )
	}

	createObject( images, x, y, parent = this.container ) {
		return this.app.createObject( images, x, y, parent )
	}

	createContainer( x, y, parent = this.container ) {
		return this.app.createContainer( x, y, parent )
	}
}
