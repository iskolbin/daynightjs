function doFlatten( output, v, index ) {
	if ( Array.isArray( v )) {
		for ( let i = 0; i < v.length; i++ ) {
			index = doFlatten( output, v[i], index )
		}
	} else {
		output[index++] = v
	}
	return index
}

export default function flatten( array ) {
	const output = []
	doFlatten( output, array, 0 )
	return output
}
