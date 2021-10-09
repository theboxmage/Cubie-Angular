import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnService {

  private turnSource = new Subject<string>();
  private animationFinished = new Subject<void>();

  turnSource$ = this.turnSource.asObservable();
  animationFinished$ = this.animationFinished.asObservable();

  announceTurn(turn: string) {
    this.turnSource.next(turn);
  }

  finishAnimation() {
    this.animationFinished.next();
  }
}
