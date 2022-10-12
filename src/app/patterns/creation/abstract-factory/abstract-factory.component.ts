import { Component, OnInit } from '@angular/core';
import Publisher from "./publisher";
import FacebookFactory from "./factories/facebook/facebook-factory";
import LinkedinFactory from "./factories/linkedin/linkedin-factory";
import SlackFactory from "./factories/slack/slack-factory";

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
})
export class AbstractFactoryComponent implements OnInit {
  content = `Test Menssage Abstract-factory,
  👉 http://localhost:4200/ `;

  constructor() {}

  ngOnInit(): void {
    const publisher = new Publisher(this.content);

    publisher.send(new FacebookFactory());
    publisher.send(new LinkedinFactory());
    publisher.send(new SlackFactory());
  }
}
