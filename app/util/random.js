function randomFloat( init = null, limit = null ) {
	if ( init === null && limit === null ) {
		return Math.random()
	} else if ( limit === null ) {
		return Math.random() * init
	} else {
		return(Math.random() * ( limit - init ) + init)
	}
}

function randomInt( init, limit ) {
	return randomFloat( init, limit )|0
}

export default {
	randomFloat,
	randomInt
}
