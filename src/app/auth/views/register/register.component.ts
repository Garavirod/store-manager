import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true; //hide password
  form:FormGroup; // form group

  constructor(
    private fb:FormBuilder
  ) { 
    /* Inicialize from group */
    this.form = this.initFormGroup();
  }

  ngOnInit(): void {
  }

  /* Creates the structure of a form Group */
  initFormGroup(): FormGroup{
    return this.fb.group({
      username:['',[
        Validators.required,
        Validators.minLength(6),
      ]],
      email:['',[
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),        
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(8),
      ]]
    });
  }

  /* Verifies if from is valid */
  isValidForm():boolean{
    return this.form.invalid;
  }

  /* Send data to backend in ordder to register a new user */
  register():void {
    console.log(this.form);
    
  }
}
