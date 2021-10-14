function createAccount(pin, amount) {
    function Account(p, a){
      this.pin = pin,
      this.balance = amount || 0
    }
    
    Account.prototype.checkBalance = function(pin){
        if(pin !== this.pin){
          return "Invalid PIN."
        } else {
          return `$${this.balance}`
        }
    }
  
    Account.prototype.deposit = function(pin, amount){
        if(pin !== this.pin){
          return "Invalid PIN."
        } else {
          this.balance += amount;
          return `Succesfully deposited $${amount}. Current balance: $${this.balance}.`
        }
    }
    
    Account.prototype.withdraw = function(pin, amount){
        if(pin !== this.pin){
          return "Invalid PIN."
        } else if(amount > this.balance){
          return "Withdrawal amount exceeds account balance. Transaction cancelled."
        } else {
          this.balance -= amount;
          return `Succesfully withdrew $${amount}. Current balance: $${this.balance}.`
        }
    }
  
    Account.prototype.changePin = function(pin, newPin){
        if(pin !== this.pin){
          return "Invalid PIN."
        } else {
          this.pin = newPin;
          return "PIN successfully changed!"
        }
    }
  
    return new Account(pin, amount)
}
  

module.exports = { createAccount };
