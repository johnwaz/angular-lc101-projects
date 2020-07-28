import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher'];
   finishedChores = ['Complete LaunchCode prep work', 'Buy groceries', 'Take out trash', 'Walk dog', 'Pay bills'];

   trophyImage = 'https://findicons.com/files/icons/2431/business_clean/256/trophy.png';

   constructor() { }

   ngOnInit() {
   }

}
