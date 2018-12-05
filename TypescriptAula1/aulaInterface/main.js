"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../aulaClasses/person");
var person_Dao_1 = require("./person.Dao");
var personDao = new person_Dao_1.PersonDao();
var person = new person_1.Person('Mikel');
personDao.insert(person);
//# sourceMappingURL=main.js.map