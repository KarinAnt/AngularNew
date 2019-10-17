import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  public allowToAddServer = false;
  public isServerCreated = "No Server Created";
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.allowToAddServer = true;
    }, 500);
  }
  onAddServer(){
    this.isServerCreated = "Server Created";
  }
}
