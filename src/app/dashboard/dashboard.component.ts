import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TransferidService } from '../api/transferid.service';
import { ButtoneditrendererComponent } from '../buttoneditrenderer/buttoneditrenderer/buttoneditrenderer.component';
import { ButtonviewrendererComponent } from '../buttonviewrenderer/buttonviewrenderer/buttonviewrenderer.component';
import { ButtonrendererComponent } from '../buttonrenderer/buttonrenderer.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  contactData!: any;
  gridApi: any;
  gridColumnApi: any;
  event: this;
  
  rowDataClicked1 = {};
  frameworkComponents = {
    buttonRenderer: ButtonrendererComponent,
    buttonviewRenderer: ButtonviewrendererComponent,
    Buttoneditrenderer: ButtoneditrendererComponent
    }

    

  constructor(private api: ApiService, private http: HttpClient,  private transferid: TransferidService, private router: Router) {
   }
   
  ngOnInit(): void {
    this.api = new ApiService(this.http);
    this.getContactDetails();
  }

  columnDefs=[
    {headerName: 'ID', field:'id', width: 195},
    {headerName: 'Nom', field:'name', width: 195, sortable: true},
    {headerName: 'Prénom', field:'surname', width: 195, sortable: true},
    {headerName: 'D. de naissance', field:'birthday', width: 195},
    {
      headerName: 'Adresses',
      valueGetter: params => params.data.address.length,
      sortable: true,
      field:'address', 
      width: 195,
      
    },
    { 
      width: 80,
      cellRendererFramework: ButtonviewrendererComponent,
      cellRendererParams: {
      label: 'View',
      onClick: this.goToView.bind(this)
      }
    },
    {
      width: 80,
      cellRendererFramework: ButtoneditrendererComponent,
      cellRendererParams: {
      label: 'Edit',
      onClick: this.goToEdit.bind(this)
      }
    },
    {
      width: 80,
      cellRendererFramework: ButtonrendererComponent,
      cellRendererParams: {
      label: 'Delete',
      onClick: this.delete.bind(this)
      }
    }
  ]

  getContactDetails(){
    this.api.getContact()
    .subscribe(res=>{
      this.contactData = res;
    })
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.contactData);
  }

  deleteContact(id){
    this.api.deleteContact(id)
    .subscribe(res =>{
      alert("Contact supprimé");
      this.router.navigate["/dashboard"]
    });
  }

  delete(e) {
    this.deleteContact(e.data.id)
  }

  goToEdit(e) {
    this.transferid.id = e.data.id;
    this.router.navigate(["/edit"])
  }

  goToView(e){
    this.transferid.id = e.data.id;
    this.router.navigate(["/view"])
  }


}
