import fullscreenElement from './fullscreenElement'

export default function isFullscreen() {
	return fullscreenElement() !== undefined && fullscreenElement() !== null
}
