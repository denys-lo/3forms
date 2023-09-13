const express = require("express"); // подключение express
const cors = require("cors");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const verbs = require("./verbs");

const app = express(); // создаем объект приложения
app.use(cors({ origin: '*' })); // origin: '*' разрешение для cors на все подключения
app.engine("hbs", expressHbs.engine({
  layoutsDir: "views/layouts",
  defaultLayout: "layout",
  extname: "hbs"
}));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
// app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  response.render("alphabet.hbs");
});

app.get("/irregular-verbs/", (request, response) => {
  response.json(verbs);
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
  // response.json(result);
  response.render("verb.hbs", result[0]);
});

app.listen(3000);
