console.log('Funguju!');

const textPozpatku = (text) => {
	return text.replaceAll('ch', 'hc').split('').reverse().join('');
	// replaceAll('ch', 'hc') protože 'ch' existuje v češtině, ale ne v ASCII
	
};

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'

const palindromy = document.querySelectorAll('li');

const jePalindrom = (palindromy) => {

	debugger;
	palindromy.forEach((palindrom) => {

		const text1 = String(palindrom.textContent
			.toLowerCase()
			.normalize("NFD")
			.replace(/\s/g, '')
			.replace(/\p{Diacritic}/gu, '')

		);

		const text2 = String(textPozpatku(palindrom.textContent)
			.toLowerCase()
			.normalize("NFD")
			.replace(/\s/g, '')
			.replace(/\p{Diacritic}/gu, '')

		);

		if (text1 === text2) {
			palindrom.classList.add('palindrom');

		}

	}
	);
};


jePalindrom(palindromy);
