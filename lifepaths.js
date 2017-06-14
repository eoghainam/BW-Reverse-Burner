/*
Initialise race arrays with empty arrays. Each array will contain that race's lifepaths.
*/

var human = [];
var dwarf = [];
var elf = []
var orc = []
var darkElf = []
var roden = []
var troll = []
var wolf = []

/*
May just distribute wizard among races or do as own. Need to work out how it works.
*/

//var wizard = []

/*
addLife function

Adds lifepath object to relevent race array.

raceArg: Race which is being added to. Race array variable.

name (nameArg): Name of lifepath. String.

setting (settingArg): Setting of lifepath. String.

time (timeArg): Time it takes to complete this lifepath. Number

leadsTo (LeadsToArg): What settings you can move to after this lifepath. (You can stick with current setting.) Array of Strings.

requires (requiresArg): Requirements needed to take this lifepath. Array of Objects otherwise. 
e.g [{type: "has", requirement: "female"}, {type: "previous", requirement: "Bishop"}]

restrictions (restrictionsArg): To do with what level you need to be.
Can be "Any" (>1), "Born" (first level), number (greater than or equal to that number).

has (hasArg): Array of attributes needed for has requierments. Array of Strings.
*/

var addLife = function(raceArg, nameArg, settingArg, timeArg, leadsToArg, requiresArg, restrictionsArg, hasArg){
	raceArg.push({name:nameArg, setting:settingArg, time:timeArg, leadsTo:leadsToArg, requires:requiresArg, restrictions:restrictionsArg, has:hasArg})
}
