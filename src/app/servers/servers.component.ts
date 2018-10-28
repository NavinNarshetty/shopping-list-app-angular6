import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewServer: boolean = false;
  serverCreationText: string = 'server wa not created';
  serverName = 'testserver';
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allownewServer = true
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationText = 'server was created'
  }

  onServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
