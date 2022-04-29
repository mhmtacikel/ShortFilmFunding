import { ShortFilm, shortFilms } from "./model";

export function create(name: string, directorName: string, wallet: string): ShortFilm {
  return ShortFilm.insert(name,directorName,wallet);  
}

export function find(id: u32): ShortFilm {
  return ShortFilm.findShortFilmById(id);
}


export function remove(id: u32): void {
  return ShortFilm.deleteById(id);
}

export function findAll(offset: u32, limit:u32 = 10): ShortFilm[]{
  return ShortFilm.findAll(offset, limit);
}

export function fundShortFilm(accountId: string, id:u32): String {
  return ShortFilm.fundShortFilmById(accountId, id);
}

export function sentFund(wallet: string, id:u32): String {
  return ShortFilm.sentFundById(wallet, id);
}
