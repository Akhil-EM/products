import { Component, OnInit } from '@angular/core';
import{Muser} from './UserModel.model'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userItem=new Muser(null,null);
  constructor() { }

  ngOnInit() {
  }
  sign_up()
  {
    alert("hbmmbm");
  }
}
