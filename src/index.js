'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================


var APP_ID = undefined;

var SKILL_NAME = "Totally Nuts";
var GET_FACT_MESSAGE = "Here's, your nutty fact: ";
var HELP_MESSAGE = "You can say something like, tell me something nutty";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Walnuts are the oldest known tree food, they date all the way back to ten thousand BC.",
    "If you love Almonds, thank bumblebees! Almonds can’t grow on their own. They need bees to help them pollinate.",
    "The shell of the Cashew, is toxic and can’t be eaten.",
    "Cashews, are in the same plant family as poison ivy and poison sumac.",
    "Cashews, have itchy oil that is primarily contained in their shell.",
    "Pistachio, is known as the smiling nut in Iran, and the happy nut in China.",
    "Macadamia nuts, are never picked. They are harvested from the ground after they fall off the tree.", 
    "Macadamia nuts, have the hardest shell of any nut, taking three hundred PSI of pressure to crack it open.",
    "Brazil nuts, are a truly special nut. They require a specific bee to be pollinated and take as long as ten to thirty years to mature.",
    "Americans spend almost eight hundred million dollars a year on peanut butter.",
    "Texas, adopted the Pecan tree as its state tree in ninteen ninteen. In fact, Texas Governor James Hogg, asked that a Pecan tree be planted at his gravesite.",
    "Ancient Greeks, believed hazelnuts could treat coughing and baldness.",
    "Almonds, have a long storage life and can be refrigerated for up to two years.",
    "Pistachios, are actually seeds of a grape like fruit.",
    "Macadamia nuts, are poisonous for dogs.",
    "Brazil nuts, aren't nuts. They are seeds contained in a capsule or pod, which splits apart.",
    "Coconuts, aren't nuts. They are drupes.",
    "Coconuts, contain Coconut water, not Coconut milk.",
    "Fresh Coconut water, is an excellent hangover cure.",
    "Peanuts, also known as groundnuts, earthnuts, goobers, pinders, Manila nuts and monkey nuts, aren’t nuts. They are a type of pea which grows underground.",
    "Walnuts, are the richest in omega-three fatty acids, which fight inflammation.",
    "Pistachio, is actually a fruit!",
    "Brazil nuts, grow on the largest tree in the Amazon forest and can live from five hundred to one thousand years.",
    "California, produces eighty two percent of the globe's Almonds.",
    "Coconut water, is a workable short-term substitute for human blood plasma.",
    "In tropical countries like Sumatra, farmers train monkeys to harvest their Coconuts.",
    "Coconut trees, happen to be one of the plants that can produce oil for biodiesel fuel.",
    "There are more than thirteen hundred kinds of Coconut.",
    "The Macadamia, is derived from an indigenous Australian tree.",
    "Brazil nuts, grow near the tops of hundred fifty foot tall trees in hard casings.",
    "Brazil nuts, grow in the wild.",
    "The name Pecan, is a Native American word that was used to describe nuts requiring a stone to crack.",
    "The Pecan capital of the world, is Albany, Georgia, which boasts more than six hundred thousand Pecan trees.",
    "Pecan trees, only produce nuts every two years.",
    "About seventy eight Pecans are used in the average Pecan pie.",
    "Pecan trees, can live to be over two hundred years old.",
    "There are nine different species of chestnut native to temperate regions of the Northern Hemisphere",
    "The life span of a chestnut tree, is between two hundred to eight hundred years.",
    "Ninety eight percent of the world's Pistachios are produced in California.",
    "A serving of Pistachios, has as much protein as en egg.",
    "It takes about five hundred forty peanuts to make a twelve ounce jar of peanut butter.",
    "The average peanut farm, is a hundred acres.",
    "Two peanut farmers, have been elected president of the United States, Thomas Jefferson and Jimmy Carter.",
    "There are six cities in the United States named Peanut.",
    "The peanut is not a nut, but a legume, related to beans and lentils.",
    "Peanuts contribute more than four billion dollars to the united states economy each year.",
    "March, is the National Peanut Month, and November is the National Peanut Butter Lovers Month.",
    "Each year, the average American consumes over six pounds of peanuts and peanut butter products.",
    "Astronaut, Allen B Sheppard took a peanut with him on his trip to the moon.",
    "Raw Cashews are actually green.",
    "November twenty third is National Cashew Day."
    ];

//=========================================================================================================================================
//Editing anything below this line might break your skill.

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};