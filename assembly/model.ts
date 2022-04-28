import{PersistentUnorderedMap,context, logging, math, storage, u128, ContractPromiseBatch} from "near-sdk-as";

export const shortFilms = new PersistentUnorderedMap<u32, ShortFilm>("m");


@nearBindgen
export class ShortFilm {

    id: u32;
    name: string;
    directorName: string;   
    wallet: string;
    totalFund: u128;
    

    constructor(name: string, directorName: string, wallet: string) {
        this.id = math.hash32<string>(name);
        this.name = name;
        this.directorName = directorName; 
        this.wallet = ""; 
        this.totalFund = context.attachedDeposit;        
    }

    static insert(name: string, directorName: string, wallet: string): ShortFilm{
        const shortfilm = new ShortFilm(name,directorName,wallet);
        
        shortFilms.set(shortfilm.id, shortfilm);

        return shortfilm;
    }

    static findAll(offset: u32, limit: u32): ShortFilm[] {
        return shortFilms.values(offset, offset + limit);
    }

    static findShortFilmById(id: u32): ShortFilm {
        return shortFilms.getSome(id);
    }

    
    static deleteById(id:u32): void {
        shortFilms.delete(id);
    }

    static fundShortFilmById(accountId:string, id:u32): String {
        const shortFilm = this.findShortFilmById(id);
        const fund_Sender = context.sender;
        const amount = context.attachedDeposit;

        logging.log("Sender: " + fund_Sender);
        logging.log(`Congratulations: ${shortFilm.name} has been funded by ${fund_Sender} with ${(amount).toString()} NEAR`);

        const funding = ContractPromiseBatch.create(accountId);
        
        const balance = context.accountBalance;

        funding.transfer(amount);

        if(amount > balance){
            return `${fund_Sender}does not have enough ${balance}`
        }
        return `${fund_Sender} has found the ${shortFilm.name} successfully`;
    }

    
    static sentFundById(wallet: string, id:u32): string {

        const shortFilm = this.findShortFilmById(id);       
        const funding = ContractPromiseBatch.create(wallet);
        const amount_receive = shortFilm.totalFund;
        funding.transfer(amount_receive);
        shortFilms.set(shortFilm.id, shortFilm);
       
        return `Sent total fund ${(amount_receive).toString()} NEAR to ${wallet}`;
        
    }
}