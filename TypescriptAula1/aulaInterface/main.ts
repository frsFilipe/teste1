import { Person } from './../aulaClasses/person';
import { DaoInterface } from "./dao.interface";
import { PersonDao } from "./person.Dao";

let personDao : DaoInterface = new PersonDao();
let person: Person = new Person ('Mikel');


personDao.insert(person);

