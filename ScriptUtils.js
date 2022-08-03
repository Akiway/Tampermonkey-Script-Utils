// ==UserScript==
// @name         Script Utils
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Utils for tempermonkey
// @author       Aurélien Klein
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @copyright	 2022+
// @grant        none
// ==/UserScript==

export class ScriptUtils {
	static create(type, props) {
		try {
			const el = document.createElement(type)
			Object.assign(el, props)
			return el
		} catch(e) {
			console.error('TmUtils - create | type: ' + type, e)
			return document.createElement(type)
		}
	}
	
	static insertCss(id, css) {
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
