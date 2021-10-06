import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnService {

  private turnSource = new Subject<string>();

  turnSource$ = this.turnSource.asObservable();

  announceTurn(turn: string) {
    this.turnSource.next(turn);
  }
}
