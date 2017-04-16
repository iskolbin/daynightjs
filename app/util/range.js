export default function range( init, limit = undefined, step = undefined ) {
	const array = []

	if ( limit === undefined ) {
		limit = init
		init = 0
	}

	if ( step === undefined ) {
		step = init < limit ? 1 : -1
	}

	if ( init > limit && step < 0 ) {
		for ( let i = init; i > limit; i += step ) {
			array.push( i )
		}
	} else if ( init < limit && step > 0 ) {
		for ( let i = init; i < limit; i += step ) {
			array.push( i )
		}
	}

	return array
}
