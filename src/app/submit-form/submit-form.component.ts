import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from './contact.model';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  myForm : FormGroup;
  contactModelObject: ContactModel = new ContactModel();

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      birthday: '',
      address: this.fb.array([])
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  postContactDetails(){
    this.contactModelObject.name = this.myForm.value.name;
    this.contactModelObject.surname = this.myForm.value.surname;
    this.contactModelObject.birthday = this.myForm.value.birthday;
    this.contactModelObject.address = this.myForm.value.address;

    this.api.postContact(this.contactModelObject)
    .subscribe(res=>{
      console.log(res);
      alert("Contact ajouté");
      this.router.navigate(["/dashboard"])
    },
    err=>{
      alert("Error");
    })
  }

  addAddress(){
    const address =this.fb.group({
        id: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required),
        rue: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        ville: new FormControl('', Validators.required),
        codepst: new FormControl('', Validators.required),
        pays: '',
        commentaire: '',
        telephone: ''
      });

    (this.myForm.get('address') as FormArray).push(address);
  }

  removeAddress(i:number){
      (this.myForm.get('address') as FormArray).removeAt(i);
  }


}
