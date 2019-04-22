import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.sass']
})
export class SomeComponent implements OnInit {

    //event creation at components

    @Output() someevent: EventEmitter<boolean> = new EventEmitter<boolean>();

    doSomething(): void{
        let somelogical: boolean = false;
        this.someevent.emit(somelogical);
        console.log(somelogical)
    }

    //end event creation at components

  constructor() { }

  ngOnInit() {
  }

}
