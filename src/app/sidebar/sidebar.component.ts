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
  constructor(private turnService: TurnService)
  {
    this.turnService = turnService;
  }

  confirm(turn: string)
  {
    this.turnService.announceTurn(turn);
  }
}
