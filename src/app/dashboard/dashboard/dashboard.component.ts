import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  ngOnInit(){
    this.validarAdmin()
  }
  validarAdmin(){
    var user = sessionStorage.getItem("user")
    console.log(user);
    
  }
}
