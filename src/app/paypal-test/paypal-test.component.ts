import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-paypal-test',
  templateUrl: './paypal-test.component.html',
  styleUrls: ['./paypal-test.component.css']
})
export class PaypalTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    render({
      currency: "USD",
        id:"#myPaypalButtons",
        value: "100.00",

      onApprove: (details ) => {
        alert("transaction successful");
    }
    });
  }

}
