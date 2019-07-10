import { Component, HostBinding, OnInit } from '@angular/core';
import { routFadeStateTrigger, routSlideStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routFadeStateTrigger({startOpacity: 0, duration: '500ms'}),
    routSlideStateTrigger
  ]
})
export class UsersComponent implements OnInit {

  // todo подключаем анимацию при роутинге
  @HostBinding('@routFadeState') routAnimation = true;
  // @HostBinding('@routSlideState') routAnimation = true;

  constructor() {
  }

  ngOnInit() {
  }

}
