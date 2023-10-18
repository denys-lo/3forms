const verbs = require("../verbs");

exports.getVerb = (request, response) => {
  const verb = request.params.verb;

  const result = verbs.filter(
    (data) =>
      data.infinitive === verb ||
      data.pastSimple === verb ||
      data.pastSimple.slice(0, data.pastSimple.indexOf("/")) === verb ||
      data.pastSimple.slice(data.pastSimple.indexOf("/") + 1) === verb ||
      data.pastParticiple === verb
  );

  response.render("verb.hbs", {
    title: `3 форми дієслова ${result[0].infinitive} - 3 forms - Неправильні дієслова англійської мови | Irregular Verbs`,
    verb: result[0]
  });
};

exports.filterVerbs = (request, response) => {
  let verb = request.params.verb;
  const verbLength = verb.length;

  const result = verbs.filter(
    (data) =>
      data.infinitive.slice(0, verbLength) === verb ||
      data.pastSimple.slice(0, verbLength) === verb ||
      data.pastSimple.slice(0, data.pastSimple.indexOf("/")).slice(0, verbLength) === verb ||
      data.pastSimple.slice(data.pastSimple.indexOf("/") + 1).slice(0, verbLength) === verb ||
      data.pastParticiple.slice(0, verbLength) === verb
  );

  response.json(result);
};
