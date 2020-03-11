class Account {
    constructor(acctName, accNo, initBal) {
        this.acctName = acctName;
        this.accNo = accNo;
        this.initBal = initBal;
        this.currentCash = initBal;
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