import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  public allowToAddServer = false;
  public isServerCreated = "No Server Created";
  public serverCreatedStatus = "Server was Created";
  serverCreated = false;
  serverName = "testServer";
  intership =[{
    name:'Alla',
    surname:'Davtyan',
    university:'YSU'
  },
  {
    name:'Ani',
    surname:'khostexyan',
    university:'YSU'
  },
  {
    name:'Larisa',
    surname:'Malkhasyan',
    university:'AUA'
  },
  {
    name:'Karinka',
    surname:'Antonyan',
    university:'YSU'
  }];
  servers = ["testserver", "testserver 2"];
  constructor() { }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.allowToAddServer = true;
    // }, 500);
  }
  onAddServer(){
    this.isServerCreated = "Server Created";
    this.serverCreated = true;
    this.servers.push(this.serverName);

  }
}
