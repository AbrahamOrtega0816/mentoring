import { Component, OnInit } from '@angular/core';
import NotificationService from "./services/notification.service";
import INotification from "./providers/notification.interface";
import FacebookNotification from "./providers/facebook-notification";
import SlackAdapterNotification from "./providers/slack-adapter-notification";
import SlackNotification from "./providers/slack-notification";

const providers: INotification[] = [
  new FacebookNotification(),
  new SlackAdapterNotification(
      new SlackNotification()
  )
];

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
})
export class AdapterComponent implements OnInit {

  notificationService = new NotificationService(providers);

  constructor() { }

  ngOnInit(): void {
    this.notificationService.post("Nuevo curso", "25% descuentos a los 10 primeros en inscribirse.");
  }

}
