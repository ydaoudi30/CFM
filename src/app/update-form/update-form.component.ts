import { Component, OnInit } from '@angular/core';
import { TransferidService } from '../api/transferid.service';
import { FormArray, FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import data from 'db.json';
import { ApiService } from '../api/api.service';
import { ContactModel } from '../submit-form/contact.model';
import { Router } from '@angular/router';

interface Post {
  id: number;
  name: any;
  surname: any;
  birthday: any;
  address: any;
}


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  myForm : FormGroup;
  contactModelObject: ContactModel = new ContactModel();
  myPost: any;

  id= this.transferid.id;
  

  constructor(private transferid: TransferidService, private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    console.log(data.posts);
    console.log(this.transferid.id)
    this.myPost = this.displayPost(this.id)
    this.myForm = this.fb.group({
      name: new FormControl(this.myPost.name, Validators.required),
      surname: new FormControl(this.myPost.surname, Validators.required),
      birthday: this.myPost.birthday,
      address: this.fb.array([])
    })
    for (let address of this.myPost.address) {
      this.addAddressForm(address);
    }
  }
  posts : Post[] = data.posts;

  displayPost(id){
    return this.posts.find(c => c.id === id);
  }

  updateContactDetails(){
    this.contactModelObject.name = this.myForm.value.name;
    this.contactModelObject.surname = this.myForm.value.surname;
    this.contactModelObject.birthday = this.myForm.value.birthday;
    this.contactModelObject.address = this.myForm.value.address;

    this.api.updateContact(this.contactModelObject,this.id)
    .subscribe(res=>{
      console.log(res);
      alert("Contact modifié");
      this.router.navigate(["/dashboard"])
    },
    err=>{
      alert("Error");
    })
  }

  addAddressForm(address){
    const addressForm =this.fb.group({
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

    addressForm.patchValue(address);
    this.addresses.push(addressForm)
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
 
  get addresses() {
    return this.myForm.controls['address'] as FormArray;
  }

  removeAddress(i:number){
    (this.myForm.get('address') as FormArray).removeAt(i);
}
  

}
  
