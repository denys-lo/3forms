const getAllVerbs = require("../scripts/getAllVerbs");
const createVerbsTable = require("../scripts/createVerbsTable");
const verbs = require("../verbs");

exports.index = (request, response) => {
  response.render("alphabet.hbs", {
    title: "3 forms - Неправильні дієслова англійської мови | Irregular Verbs | 3 форми дієслова",
    irregularVerbs: getAllVerbs()
  });
};

exports.search = (request, response) => {
  const verb = request.query.verb;
  const verbLength = verb.length;

  const result = verbs.filter(
    (data) =>
      data.infinitive.slice(0, verbLength) === verb ||
      data.pastSimple.slice(0, verbLength) === verb ||
      data.pastSimple.slice(0, data.pastSimple.indexOf("/")).slice(0, verbLength) === verb ||
      data.pastSimple.slice(data.pastSimple.indexOf("/") + 1).slice(0, verbLength) === verb ||
      data.pastParticiple.slice(0, verbLength) === verb
  );

  response.render("search.hbs", {
    irregularVerbs: result
  });
};

exports.table = (request, response) => {
  response.render("verbsTable.hbs", {
    title: "Таблиця неправильних дієслів - 3 forms - Неправильні дієслова англійської мови | Irregular Verbs | 3 форми дієслова",
    table: createVerbsTable()
  });
}
