const verbs = require("../verbs");

module.exports = getAllVerbs = () => {
  const alphabet = 'ABCDEFGHIJKLMOPQRSTUW'.split('');
  let verbsBlock = "";

  let count = 0;
  for (let i = 0; i < alphabet.length; i++) {
    const letter = `<h4>${alphabet[i]}</h4>`;

    let irregularVerbs = "";
    for (let j = count; j < verbs.length; j++) {
      if (alphabet[i].toLowerCase() === verbs[j].infinitive[0]) {
        irregularVerbs += `<a class="m-2 text-decoration-none" href="/irregular-verbs/${verbs[j].infinitive}">${verbs[j].infinitive}</a>`;
      } else {
        count = j++;
        break;
      }
    }

    const letterColumn = `<div class="d-flex flex-wrap">${irregularVerbs}</div>`;
    verbsBlock += `<div class="verbs-block">${letter} ${letterColumn}</div><hr>`;
  }
  const alphabetizedVerbs = `<div class="alphabetized-verbs container-xxl">${verbsBlock}</div>`;

  return alphabetizedVerbs;
};
