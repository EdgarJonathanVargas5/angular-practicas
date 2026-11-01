import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter.Component.html',
})
export class CounterComponent {
    counter = 0;
    counterSignal = signal(0);

    increment(){
        this.counter ++;
        this.counterSignal.update(currentValue => currentValue + 1 );
    }

    decrement(){
        if(this.counter === 0 || this.counterSignal() === 0){
            return;
        }
        this.counter --;
        this.counterSignal.update(currentValue => currentValue - 1);
    }

    resetCounter(){
        this.counter = 0;
        this.counterSignal.set(0);
    }
}