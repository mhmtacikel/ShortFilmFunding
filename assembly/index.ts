import { ShortFilm, shortFilms } from "./model";

export function create(name: string, directorName: string, wallet: string): ShortFilm {
  return ShortFilm.insert(name,directorName,wallet);  
}

export function get(id: u32): ShortFilm {
  return ShortFilm.findShortFilmById(id);
}


export function del(id: u32): void {
  ShortFilm.deleteById(id);
}

export function getAll(offset: u32, limit:u32 = shortFilms.length): ShortFilm[]{
  return ShortFilm.findAll(offset, limit);
}

export function fundShortFilm(accountId: string, id:u32): String {
   return ShortFilm.fundShortFilmById(accountId, id);
}

export function sentFund(wallet: string, id:u32): String {
  return ShortFilm.sentFundById(wallet, id);
}
