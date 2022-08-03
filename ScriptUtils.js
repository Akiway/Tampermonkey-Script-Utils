class ScriptUtils {
	create(type, props) {
		try {
			const el = document.createElement(type)
			Object.assign(el, props)
			return el
		} catch(e) {
			console.error('TmUtils - create | type: ' + type, e)
			return document.createElement(type)
		}
	}
	
	insertCss(id, css) {
		try {
			const head = document.getElementsByTagName('head')[0]
			const style = document.createElement('style')
			style.id = id
			style.type = 'text/css'
			style.innerHTML = css
			head.appendChild(style)
		} catch(e) {
			console.error('TmUtils - insertCss | id: ' + id, e)
		}
	}
}

window.SU = new ScriptUtils()
