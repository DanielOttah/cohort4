class Account {
    constructor(acctName, initBal) {
        this.acctName = acctName;
        this.initBal = initBal;
        this.currentCash = initBal;
        // this.currentCash;
    }
    depositCash(cash) {
        this.currentCash = this.currentCash + cash;
        return this.currentCash;
    }
    withdrawCash(cash) {
        this.currentCash = this.currentCash - cash;
        return this.currentCash;
    }
    cashBalance() {
        return this.currentCash;
    }

}
export default Account;