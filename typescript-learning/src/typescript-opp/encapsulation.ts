// encapsulation

class BankAccount {
  public userId: number;
  public name: string;
  private blance: number;
  constructor(userId: number, name: string, blance: number) {
    (this.userId = userId), (this.name = name), (this.blance = blance);
  }
  private addBlance(blance: number) {
    this.blance = this.blance + blance;
  }
}

const myBank = new BankAccount(1, "Monir", 50);
myBank.addBlance(500); // can not access here
