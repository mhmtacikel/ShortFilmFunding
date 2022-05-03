import { ShortFilm,shortFilms } from "./model";


export function seedShortFilms(): void {
  ShortFilm.seedShortFilms();
}

export function create(name: string, directorName: string, wallet: string): ShortFilm {
  return ShortFilm.insert(name,directorName,wallet);  
}

export function find(id: u32): ShortFilm {
  return ShortFilm.findShortFilmById(id);
}

export function remove(id: u32): void {
  ShortFilm.deleteById(id);
}

export function findAll(offset: u32, limit:u32 = shortFilms.length): ShortFilm[]{
  return ShortFilm.findAll(offset, limit);
}

export function fundShortFilm(id:u32): String {
  return ShortFilm.fundShortFilmById(id);
}

export function sendFund(id:u32): String {
  return ShortFilm.sendFundById(id);
}







