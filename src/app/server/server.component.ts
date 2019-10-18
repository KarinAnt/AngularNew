import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .serverStyle {
            color: white;
        }
    `]
})
export class ServerComponent{
    public serverID = 10;
    public serverStatus = 'online';
    constructor(){
        this.serverStatus = (Math.random() > 0.5)?"online":"ofline"; 
    }
    getColor(){
        return this.serverStatus==='online'?'red':'blue';
    }
}