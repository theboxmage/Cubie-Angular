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
  algText: string | undefined;
  constructor(private turnService: TurnService) {
    this.turnService = turnService;
  }

  confirm(turn: string) {
    this.turnService.announceTurn(turn);
  }

  loadAlg(){
    if(this.algText)
    {
      let queue: string[] = [];
      let input = this.algText.replace(/[^a-zA-Z2']/g, "");
      for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) == "'") {
          queue.push(queue.pop() + '\'');
          if (input.charAt(i - 1) == "2") {
            queue[queue.length - 2] += '\'';
          }
        } else if (input.charAt(i) == "2") {
          queue.push(queue[queue.length - 1] + "");
        } else {
          queue.push(input.charAt(i));
        }
      }
      while(queue.length > 0)
      {
        this.turnService.announceTurn(queue.shift()!);
      }
    }
  }
}
