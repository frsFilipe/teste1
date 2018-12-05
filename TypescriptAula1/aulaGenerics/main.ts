import { DaoInterface } from "./dao.interface";
import { Person } from "../aulaClasses/person";
import { Dao } from "./Dao";


let dao: DaoInterface<Person> = new Dao<Person>();
let person: Person = new Person('Jonas');

dao.insert(person);


