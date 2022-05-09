import * as db from "../components/helpers/storage";
import { IPerson } from "../interfaces/services/person.interface";

export async function getAll(term: string): Promise<IPerson[] | undefined> {
    if (term) return getByFilter(term);
    return await db.all();
}

export async function getByFilter(term: string): Promise<IPerson[] | undefined> {
    return await db.query(term);
}

export function getOne(id: string): IPerson | undefined {
    return db.get(id);
}

export function save(person: IPerson): IPerson | undefined {
    return db.set(person);
}