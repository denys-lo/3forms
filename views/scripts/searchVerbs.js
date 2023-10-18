const searchInput = document.getElementById('exampleDataList');
const datalistOptions = document.getElementById('datalistOptions');
const form = document.querySelector('form');

searchInput.addEventListener('keyup', async () => {
  let child = datalistOptions.lastElementChild;
  while (child) {
    datalistOptions.removeChild(child);
    child = datalistOptions.lastElementChild;
  }

  try {
    if (searchInput.value.trim() !== "") {
      if (document.querySelector('.error-alert') !== null) {
        form.removeChild(document.querySelector('.error-alert'));
      }
      const response = await fetch("/irregular-verbs/search/" + searchInput.value);
      const result = await response.json();

      if (result.length === 0) {
        warningAlarm();
      } else {
        for (let i = 0; i < result.length; i++) {
          const option = document.createElement("option");
          option.innerText = `${result[i].infinitive} | ${result[i].pastSimple} | ${result[i].pastParticiple}`;
          option.value = result[i].infinitive;
          datalistOptions.appendChild(option);
        }
      }
    }
  } catch (e) {
    warningAlarm();
  }
});

const warningAlarm = () => {
  const warning = document.createElement('div');
  warning.classList.add('mt-3');
  warning.classList.add('alert');
  warning.classList.add('alert-danger');
  warning.classList.add('error-alert');
  warning.innerText = "На жаль, ми нічого не змогли знайти.";
  form.appendChild(warning);
};
