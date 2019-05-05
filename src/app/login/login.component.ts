import { Component, OnInit ,Output} from '@angular/core';
import { ApiService } from '../api.service';
import {Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user:any = [];
  username:String;
  password:String;
 

constructor(private api:ApiService,private router: Router) { }

 

login() : void {
  if(this.username == this.user[0].username && this.password == this.user[0].username){
    this.router.navigateByUrl('home');
  }else {
    alert("Invalid credentials");
  }
}


ngOnInit() {
  this.api.getUserList()
    .subscribe( data => {
      this.user = data;
    });
}
  
}
