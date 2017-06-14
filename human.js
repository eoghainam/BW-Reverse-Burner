/*
Adding Human Lifepaths.
race, name, setting, leadsTo, requires, restrictions, has
*/
addLife(human, "Born Peasant", "Peasant", 8, ["Servitude", "Soldier", "Sea", "Religious"], [], "Born", []);

addLife(human, "Farmer", "Peasant", 8, ["Villager", "Soldier", "Servitude"], [], "All", []);

addLife(human, "Head of Household", "Peasant", 15 ["Villager", "Soldier"], [], 2, []);

addLife(human, "Midwife", "Peasant", 10, ["Villager", "Outcast"], [{has: "Female"}, {previous: "Farmer"}, {previous: "Itinerant Preist"} ], "Any", ["Female"]);

addLife(human, "Lazy Stayabout", "Peasant", 7, ["Outcast", "Servitude", "Soldier"], [], "All", []);

addLife(human, "Conscript", "Peasant", 1, ["Servitude", "Soldier", "Outcast"], [], "All", []);

addLife(human, "Peasant Pilgram", "Peasant", 3, ["Outcast", "Servitude", "Villager"], [], "All", []);

addLife(human, "Miller", "Peasant", 7, ["Villager"], [], "All", []);

addLife(human, "Fisherman", "Peasant", 6, ["Villager", "Outcast", "Seafaring"], [], "All", []);

addLife(human, "Shepard", "Peasant", 4, ["Villager", "Outcast"], [], "All", []);

addLife(human, "Woodcutter", "Peasant", 5, ["Villager", "Outcast"], [], "All", []);

addLife(human, "Hunter", "Peasant", 5, ["Villager", "Outcast", "Soldier"], [], "All", []);

addLife(human, "Trapper", "Peasant", 5, ["Villager", "Outcast", "Soldier"], [], "All", []);

addLife(human, "Peddler", "Peasant", 5, ["Villager", "Servitude", "City", "Outcast"], [], "All", []);

addLife(human, "Elder", "Peasant", 15, ["Villager", "Outcast"], [{age:50}], 5, []);
//Interpreting Elder restriction as 4 previous lifepaths not 4 total

addLife(human, "Augur", "Peasant", 5, ["Servitude", "Outcast"], [{previous: "Midwife"}, {previous: "Country Wife"}, {has: "Female"}], -3, ["Female"]);

addLife(human, "Irinerant Preist", "Peasant", 6, ["Villager", "Outcast", "City", "Religious"], [{has: "Acolyte"}], "All", []);

addLife(human, "Recluse Wizard", "Peasant", 15, ["Outcast", "Villager", "City", "Court"], [{has: "Sorcery"], "All", []);

addLife(human, "Country Wife", "Peasant", 10, ["Religious"], [{misc: "husband"], "All", ["Female"]);
