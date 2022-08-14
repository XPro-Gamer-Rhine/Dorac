class CustomAlert {
	constructor() {}

	alert = function (message: string, title?: string) {
		document.body.innerHTML =
			document.body.innerHTML +
			'<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>'

		let dialogoverlay: HTMLElement | null = document.getElementById('dialogoverlay')
		let dialogbox: HTMLElement | null = document.getElementById('dialogbox')

		let winH = window.innerHeight
		if (dialogoverlay) dialogoverlay.style.height = winH + 'px'

		if (dialogbox) dialogbox.style.top = '300px'

		if (dialogoverlay) dialogoverlay.style.display = 'block'
		if (dialogbox) dialogbox.style.display = 'block'

		document!.getElementById('dialogboxhead')!.style.display = 'block'

		if (typeof title === 'undefined') {
			document!.getElementById('dialogboxhead')!.style.display = 'none'
		} else {
			document!.getElementById('dialogboxhead')!.innerHTML =
				'<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + title
		}
		document!.getElementById('dialogboxbody')!.innerHTML = message
		document!.getElementById('dialogboxfoot')!.innerHTML =
			'<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>'
	}

	ok = function () {
		document!.getElementById('dialogbox')!.style.display = 'none'
		document!.getElementById('dialogoverlay')!.style.display = 'none'
	}
}

export const customAlert = new CustomAlert()
