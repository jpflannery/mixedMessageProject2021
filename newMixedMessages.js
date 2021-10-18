function generateRandNum (num) {
	return Math.floor(Math.random() * num)
}

const madLib = {
	manName: ['John', 'Kenny', 'Ricky', 'Cecil', 'Felix'],
	nickname: ['Skippy', 'Slim', 'Skeeter', 'Bobo', 'Shorty'],
	adjective: ['tall', 'diminutive', 'dapper', 'lead-footed', 'bald'],
	sport: ['baseball', 'disc golf', 'drag racing', 'cricket', 'basketball'],
	womanName: ['Jenny', 'Anita', 'Cheryl', 'Roberta', 'Kate']
}

let nonsenseSentence = []

for(let property in madLib) {
	let optionIndex = generateRandNum(madLib[property].length)
	
	switch(property){
		case 'manName':
			nonsenseSentence.push(`There once was a man named ${madLib[property][optionIndex]}.`);
			break;
		case 'nickname':
			nonsenseSentence.push(`His mom gave him the nickname "${madLib[property][optionIndex]}".`);
			break;
		case 'adjective':
			nonsenseSentence.push(`She gave him this nickname despite the fact he was ${madLib[property][optionIndex]}.`);
			break;
		case 'sport':
			nonsenseSentence.push(`He always dreamed of playing ${madLib[property][optionIndex]} until one day he met a beatiful lady.`);
			break;
		case 'womanName':
			nonsenseSentence.push(`This young lady named ${madLib[property][optionIndex]} distacted him from his dream, but they were married happily ever after.`);
			break;
		default:
			nonsenseSentence.push('There is not enough info.');
			break;
	}
}

function formatSentence(sentence) {
	const formatted = nonsenseSentence.join('\n');
	console.log(formatted)
}

formatSentence(nonsenseSentence);