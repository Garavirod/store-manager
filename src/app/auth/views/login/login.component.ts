import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  
  formGroup: FormGroup; 
  constructor( private fb:FormBuilder ) {
    // Initialize formgroup
    this.formGroup = this.getFormGroup(); 
  }

  ngOnInit(): void {
  }

  isValidForm():boolean{
    return this.formGroup.invalid;
  }


  private getFormGroup():FormGroup{
    return this.fb.group({
      email:['',[
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"), 
      ]],
      password:['',[
        Validators.required
      ]]
    });
  }

  /* Login */
  login(){
    
  }

}
