import { ShortFilm, shortFilms } from "./model";
import{context, logging, u128} from "near-sdk-as";

export function create(name: string, directorName: string, wallet: string): ShortFilm {
  return ShortFilm.insert(name,directorName,wallet);  
}

export function find(id: u32): ShortFilm {
  return ShortFilm.findShortFilmById(id);
}


export function remove(id: u32): void {
  ShortFilm.deleteById(id);
}

export function findAll(offset: u32, limit:u32 = 10): ShortFilm[]{
  return ShortFilm.findAll(offset, limit);
}

export function fundShortFilm(id:u32): String {
  return ShortFilm.fundShortFilmById(id);
}

export function sentFund(id:u32): String {
  assert(context.attachedDeposit == u128.fromString('10000000000000000000000000'), 'A minimum of 10 NEAR is required to send the funding to the short film.');
        logging.log("A minimum of 10 NEAR is required to send the funding to the short film.");
  return ShortFilm.sentFundById(id);
}
