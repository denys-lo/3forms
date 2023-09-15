const express = require("express"); // подключение express
const cors = require("cors");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const verbs = require("./verbs");
const getAllVerbs = require("./scripts/getAllVerbs");

const app = express(); // создаем объект приложения
app.use(cors({ origin: '*' })); // origin: '*' разрешение для cors на все подключения
app.engine("hbs", expressHbs.engine({
  layoutsDir: "views/layouts",
  defaultLayout: "layout",
  extname: "hbs"
}));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (request, response) => {
  response.render("alphabet.hbs", {
    irregularVerbs: getAllVerbs()
  });
});

app.get("/irregular-verbs/:verb", (request, response) => {
  const verb = request.params.verb;

  const result = verbs.filter(
    (data) =>
      data.infinitive === verb ||
      data.pastSimple === verb ||
      data.pastSimple.slice(0, data.pastSimple.indexOf("/")) === verb ||
      data.pastSimple.slice(data.pastSimple.indexOf("/") + 1) === verb ||
      data.pastParticiple === verb
  );
  response.render("verb.hbs", result[0]);
});

app.get("/irregular-verbs/search/:verb", (request, response) => {
  const verb = request.params.verb;
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
});

app.get("/search", (request, response) => {
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
  response.json(result);
});

app.listen(3000);
