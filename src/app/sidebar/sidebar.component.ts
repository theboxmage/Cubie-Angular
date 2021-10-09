import { Component, EventEmitter, Output } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { TurnService } from '../turn.service';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [TurnService]
})
export class SidebarComponent {
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
  constructor(private turnService: TurnService)
  {
    this.turnService = turnService;
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

  confirm(turn: string)
  {
    this.turnService.announceTurn(turn);
  }

}
