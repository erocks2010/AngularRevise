import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition,keyframes} from '@angular/animations';

//This is to demonstrate AsyncPipe. AsyncPipe is used to display values as and when they arrive.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('removeLI', [
      transition('*=>void', [
        animate('300ms 100ms ease-in', 
        keyframes(
          [style({
          transform: 'translateX(0)',
          offset:0
        }),
        style({
          transform:'translateX(-10%)',
          offset:0.3
        }),
        style({
          transform:'translateX(100%)',
          offset:1
        })]
        )
        )
      ]),
      transition('void=>*', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('300ms ease-in', style({
          transform: 'translateX(0%)'
        }))
      ])
    ]),
    trigger('animateMe', [
      state('inactive', style({ backgroundColor: "grey", color: "red", transform: 'scale(1)' })),
      state('active', style({ backgroundColor: "grey", color: "yellow", transform: 'scale(1.1)' })),
      transition('inactive => active', [
        style({
          backgroundColor: 'purple',
          transform: 'scale(1.3)'
        }),
        animate('1000ms ease-in', style({
          backgroundColor: 'green',
          transform: 'scale(1)'
        }))
      ]),
      transition('*=>void',
        style({}),
        animate('1000ms', style({
          transform: 'translateX(100%)'
        }))),
      transition("active => inactive", animate('100ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  base: number;
  exponent: number;
  messages$: Observable<string>;
  messages: Array<string>;
  emoticon: string;
  isVisible: boolean = false;
  color: string = null;
  toggle: string = 'inactive';
  formVisible:boolean=false;

  constructor() {
    this.messages = [
      'Hi',
      'Welcome Tarun',
      'This is an example of AsyncPipe',
      'This will display the 5 messsages the array has',
      'after an interval of 1 second'
    ]
    this.sendMessage();
  }
  //Below will send one array item every 1 second . The AsyncPipe will handle the Observable values.
  sendMessage() {
    this.messages$ = Observable.timer(0, 1000)
      .take(5)
      .map((i) => {
        console.log(i)
        let ret: string = '';
        for (let j = 0; j <= i; j++) {
          ret = ret + ' ' + this.messages[j]
        }
        return ret;
      })
  }

  reverseDisplay() {
    this.isVisible = !this.isVisible;
  }
  toggleButton() {
    this.toggle = (this.toggle === 'inactive') ? 'active' : 'inactive';
  }
  removeMessage() {
    this.messages.pop();
  }
  showForm(){
    this.formVisible=!this.formVisible;
  }
}
