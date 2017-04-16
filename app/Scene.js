export default class Scene {
	constructor( app ) {
		this.app = app
		this.container = app.createContainer( 0, 0 )
	}

	createObject( images, x, y, parent = this.container ) {
		return this.app.createObject( images, x, y, parent )
	}

	createContainer( x, y, parent = this.container ) {
		return this.app.createContainer( x, y, parent )
	}
}
