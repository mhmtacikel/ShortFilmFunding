
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
        this.wallet = wallet; 
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
        `${id} has been deleted`;
    }

    static fundShortFilmById(id:u32): String {
        assert(shortFilms.contains(id), 'Short Film does not exist');
        const shortFilm = this.findShortFilmById(id);        
        const fund_Sender = context.sender;
        const amount = context.attachedDeposit;

        logging.log("Sender: " + fund_Sender);
        logging.log(`Congratulations: ${shortFilm.name} has been funded by ${fund_Sender} with ${(amount).toString()} NEAR`);
      
        const balance = context.accountBalance;     

        shortFilm.totalFund = u128.add(shortFilm.totalFund, amount);        
        shortFilms.set(shortFilm.id, shortFilm);

        if(amount > balance){
            return `${fund_Sender}does not have enough ${balance}`
        }
        return `Congratulations: ${shortFilm.name} has been funded by ${fund_Sender} with ${(amount).toString()} NEAR`;
    }

    
    static sendFundById(id:u32): string {
        const shortFilm = this.findShortFilmById(id);
        const wallet=shortFilm.wallet;
        const funding = ContractPromiseBatch.create(wallet);
        const amount_receive = shortFilm.totalFund;
        // assert(amount_receive < u128.fromString('10000000000000000000000000'), 'Amount is not enough'); 
        // Maybe later we can add a check for the amount of the short film to be greater than the amount of the funding
        funding.transfer(amount_receive);
        shortFilms.set(shortFilm.id, shortFilm);
       
        return `Sent total fund ${(amount_receive).toString()} Yocto N to ${wallet}`;
    }
}