$(document).ready(updateScenario);
$('#hit-me-button').click(updateScenario);

var usedScenarios = [];

function updateScenario() {
  var i = Math.floor(Math.random() * scenarios.length);
  var scenario = scenarios[i];
  var hasBeenDoneAlready = usedScenarios.indexOf(i) !== -1;

  if (!hasBeenDoneAlready) {
    var replaceScenarioText = function () {
      $('scenario').text(scenario);
    };
    var fadeInScenario = function () {
      $('h2').fadeOut(300).css('visibility', 'visible').fadeIn(300);
    }
    setTimeout(replaceScenarioText, 300);
    fadeInScenario();
    usedScenarios.push(i);
    return;
  } else if (usedScenarios.length === scenarios.length) {
    usedScenarios = [];
  }
  updateScenario();
}
