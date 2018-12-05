"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("../aulaClasses/person");
var Dao_1 = require("./Dao");
var dao = new Dao_1.Dao();
var person = new person_1.Person('Jonas');
dao.insert(person);
//# sourceMappingURL=main.js.map