function Command(operation) {
  this.operation = operation;
}

Command.prototype.execute = function () {
  this.operation.execute();
}

function ProcessCreditCardPayment() {
  return {
    execute: function() {
      console.log('Credit Card')
    }
  };
}

function ProcessPayPalPayment() {
  return {
    execute: function() {
      console.log('PayPal')
    }
  };
}

function ProcessStripePayment() {
  return {
    execute: function() {
      console.log('Stripe')
    }
  };
}

function CreditCardCommand() {
  return new Command(new ProcessCreditCardPayment());
}

function PayPalCommand() {
  return new Command(new ProcessPayPalPayment());
}

function StripeCommand() {
  return new Command(new ProcessStripePayment());
}

function PaymentSystem() {
  let paymentCommand;
    
  return {
    setPaymentCommand: function(command) {
      paymentCommand = command;
    },
    executeCommand: function() {
      paymentCommand.execute();
    }
  };
}

function run() {
  let paymentSystem = new PaymentSystem();
  paymentSystem.setPaymentCommand(new CreditCardCommand());
  paymentSystem.executeCommand();
  paymentSystem.setPaymentCommand(new PayPalCommand());
  paymentSystem.executeCommand();
  paymentSystem.setPaymentCommand(new StripeCommand());
  paymentSystem.executeCommand();
}

run();