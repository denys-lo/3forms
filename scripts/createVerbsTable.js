const verbs = require("../verbs");

module.exports = createVerbsTable = () => {
  let tr = "";
  for (const verb of verbs) {
    tr += `<tr>
<td><a class="text-decoration-none text-warning" href="/irregular-verbs/${verb.infinitive}">${verb.infinitive}</a></td>
<td><a class="text-decoration-none" href="/irregular-verbs/${verb.infinitive}">${verb.pastSimple}</a></td>
<td><a class="text-decoration-none text-danger" href="/irregular-verbs/${verb.infinitive}">${verb.pastParticiple}</a></td>
<td>${verb.translation}</td>
</tr>`;
  }
  return tr;
};
