
interface ticket_destination {
    leaving: string;
    going: string;
}



class Ticket extends Product implements ticket_destination{
    public leaving: string = ""
    public going: string = ""
  
    constructor(
        id: string,
        name: string,
        description: string,
        price: number
    ) {
       super(id, name, description, price)
    }
  
    public setLeaving(): string {
        return this.leaving;
      }
    public setGoing(): string {
        return this.going;
      }
   
  }