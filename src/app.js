/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoDid = who[Math.round(Math.random() * (who.length - 1))];
  let whatAction = action[Math.round(Math.random() * (action.length - 1))];
  let whatWhat = what[Math.round(Math.random() * (what.length - 1))];
  let whatWhen = when[Math.round(Math.random() * (when.length - 1))];

  document.querySelector("#The-excuse").innerHTML =
    "<div> " +
    whoDid +
    " " +
    whatAction +
    "<br> " +
    whatWhat +
    " " +
    whatWhen +
    ".</div>";
};
