import {Component} from '@angular/core';
import {TurnService} from '../turn.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [TurnService],
})
export class SidebarComponent {
  options: Array<string> = ["L", "R", "U", "D", "F", "B", "l", "r", "u", "d", "f", "b", "M", "x", "y", "z"];
  sliderValue = new FormControl(50);

  constructor(private turnService: TurnService) {
    this.turnService = turnService;
  }

  confirm(turn: string) {
    this.turnService.announceTurn(turn);
  }
}
