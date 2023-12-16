const ruleBook = document.querySelector('.ruleBook');
const rulesButton = document.querySelector('.rulesButton');
const closeButton = document.querySelector('.closeButton');
function handleRuleMenuClick() {
	ruleBook.classList.toggle('open');
}

rulesButton.addEventListener('click', handleRuleMenuClick);
closeButton.addEventListener('click', handleRuleMenuClick);
