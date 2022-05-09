import { v4 as uuidv4 } from 'uuid';
import { IPerson } from "../../interfaces/services/person.interface";

export async function query(term: string): Promise<IPerson[]> {
    try {
        const db = await all();
        return Object.values(db)?.filter(({ name, email, phone }) => [name.toLocaleLowerCase(), email.toLocaleLowerCase(), phone].some(item => item.includes(term.toLocaleLowerCase())));
    } catch (error) {
        console.error(error);
        throw Error('Não foi possível recuperar dados');
    }
}

export async function all(): Promise<IPerson[]> {
    try {
        return new Promise(function (res) /* apenas pra simular uma consulta com algum delay*/ {
            const objectList: any = {};
            for (const storageKey of Object.keys(localStorage || {})?.filter(fkey => /^db\.+/.test(fkey))) {
                objectList[storageKey] = JSON.parse(localStorage[storageKey])
            }
            setTimeout(() => res(Object.values(objectList)), 600);
        })
    } catch (error) {
        console.error(error);
        throw Error('Não foi possível recuperar dados');
    }
}

export function get(id: string) {
    try {
        return JSON.parse(localStorage.getItem(`db.${id}`) || '{}');
    } catch (error) {
        console.error(error);
        throw new Error('Não foi possível recuperar dados');
    }
}
export function set(person: IPerson): IPerson {
    try {
        const id = Object(person).id || uuidv4(); /* sei que eu poderia usar randomUUID do pacote "crypto" do chromium v8*/
        const _person: IPerson = { ...person, id };
        localStorage.setItem(`db.${id}`, JSON.stringify(_person));
        return _person;
    } catch (error) {
        console.error(error);
        throw new Error('Não foi possível salvar dados');
    }
}