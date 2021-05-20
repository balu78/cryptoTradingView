import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'app-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.css']
})
export class TradingviewComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit(): void {
  }
  coins = [
    {id:1, name:"BTC", symbol:"BTCUSD"},
    {id:2, name:"ETH", symbol:"ETHUSD"},
    {id:3, name:"ADA", symbol:"ADAUSD"},
    {id:4, name:"LTC", symbol:"LTCUSD"},
  ];
  ngAfterViewInit() {
    new TradingView.widget({
       'container_id': 'technical-analysis',
       'autosize': true,
       'symbol': 'BTCUSD',
       'interval': '60',
       'timezone': 'exchange',
       'theme': 'Dark',
       'style': '1',
       'toolbar_bg': '#f1f3f6',
       'withdateranges': true,
       'hide_side_toolbar': false,
       'allow_symbol_change': true,
       'save_image': false,
       'hideideas': true,
       'studies': [ 
       'MASimple@tv-basicstudies' ],
       'show_popup_button': true,
       'popup_width': '1000',
       'popup_height': '1500'
     });
   }
   plotGraph(symbol){
    new TradingView.widget({
      'container_id': 'technical-analysis',
      'autosize': true,
      'symbol': symbol,
      'interval': '60',
      'timezone': 'exchange',
      'theme': 'Dark',
      'style': '1',
      'toolbar_bg': '#f1f3f6',
      'withdateranges': true,
      'hide_side_toolbar': false,
      'allow_symbol_change': true,
      'save_image': false,
      'hideideas': true,
      'studies': [ 
      'MASimple@tv-basicstudies' ],
      'show_popup_button': true,
      'popup_width': '1000',
      'popup_height': '1500'
    });
   }
}
