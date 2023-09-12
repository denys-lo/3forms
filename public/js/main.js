const alphabet = 'ABCDEFGHIJKLMOPQRSTUW'.split('');

const getAllVerbs = async () => {
  const response = await fetch('/irregular-verbs', {
    method: 'GET',
    headers: {
      accept: "application/json"
    }
  });

  if (response.ok === true) {
    const verbs = await response.json();

    let count = 0;
    for (let i = 0; i < alphabet.length; i++) {
      const alphabetizedVerbs = document.querySelector('.alphabetized-verbs');

      const letter = document.createElement('h4');
      letter.innerText = alphabet[i];
      alphabetizedVerbs.appendChild(letter);

      const letterColumn = document.createElement('div');
      letterColumn.classList.add('d-flex');
      letterColumn.classList.add('flex-wrap');
      alphabetizedVerbs.appendChild(letterColumn);

      for (let j = count; j < verbs.length; j++) {
        if (alphabet[i].toLowerCase() === verbs[j].infinitive[0]) {
          const irregularVerb = document.createElement('span');
          irregularVerb.classList.add('p-2');
          irregularVerb.innerHTML = `<a href="/irregular-verbs/${verbs[j].infinitive}">${verbs[j].infinitive}</a>`;
          letterColumn.appendChild(irregularVerb);
        } else {
          count = j++;
          break;
        }
      }
    }
  }
};

getAllVerbs();
