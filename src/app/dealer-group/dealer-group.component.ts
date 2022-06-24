import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DealerGroupService } from '../services/dealer-group.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dealer-group',
  templateUrl: './dealer-group.component.html',
  styleUrls: ['./dealer-group.component.css']
})
export class DealerGroupComponent implements OnInit {
  showSearchGrid: boolean = true;
  showAddDealer: boolean = true;
  showEditForm: boolean = false;

  stateList: any;
  cityList: any;
  DealerData: any;
  updatedealer: any;
  CountryList: any;
  DistributorList: any;
  AddDealerData: FormGroup = new FormGroup({});
  updateform: FormGroup = new FormGroup({});
 
  constructor( private snakbar:MatSnackBar , private DealerGroupService: DealerGroupService,private router:Router, private FormBuilder:FormBuilder) { }

  ngOnInit(): void {

    console.log("DealerGroup")
    this.showSearchGrid = true;
    this.showAddDealer = false;
    this.showEditForm = false;
    this.GetDealerData();
   

  }

  GetDealerData() {
    this.DealerGroupService.getDealerList().subscribe(data => {

      this.DealerData = data;
      console.log("Data", this.DealerData);

      this.DealerGroupService.getCountryList().subscribe(data => {
        this.CountryList = data;
      })
      this.DealerGroupService.getDistributorList().subscribe(data => {
        this.DistributorList = data;
      })

    })
  }


  AddDealer() {
    this.showSearchGrid = false;
    this.showAddDealer = true;
    this.showEditForm = false;

    this.AddDealerData = this.FormBuilder.group({
      Distributor: new FormControl('', [Validators.required]),
      DealerName: new FormControl('', [Validators.required]),
      DealerCode: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Country: new FormControl('', [Validators.required]),
      StateProvince: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
      DealerLogo: new FormControl(''),
      ContactPerson: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      ContactNumber: new FormControl('', [Validators.required])
    })

  }

  SaveDealer() {

    console.log(this.AddDealerData.value);
   
    this.showSearchGrid = true;
    this.showAddDealer = false;
    this.showEditForm = false;
  }

  UpdateDealer(data: any) {
    this.showSearchGrid = false;
    this.showAddDealer = false;
    this.showEditForm = true;
    console.log("Update")
    this.updatedealer = data;

    console.log(this.updatedealer)
    
    this.updateform = this.FormBuilder.group({
      'Distributor':new FormControl(this.updatedealer.DistributorName),
      'DealerName': new FormControl(this.updatedealer.DealerName),
      'DealerCode': new FormControl(this.updatedealer.DealerCode),
      'Address': new FormControl(this.updatedealer.DealerAddress),
      'Country': new FormControl(this.updatedealer.Country_Id),
      'StateProvince': new FormControl(this.updatedealer.State_Id),
      'City': new FormControl(this.updatedealer.City_Id),
      'DealerLogo':new FormControl(''),
      'ContactPerson': new FormControl(this.updatedealer.DealerContact),
      'Email': new FormControl(this.updatedealer.DealerEmail),
      'ContactNumber': new FormControl(this.updatedealer.DealerContactNumber)
      
    })



  }

  getstate(countryId: any) {
    this.DealerGroupService.getState(countryId).subscribe((data: any) => {
      this.stateList = data;
      console.log(this.stateList)
      let CityName = this.stateList.CityName;
    }, error => {
      console.log(error);
    });
  }

  getcity(stateId: any) {
    this.DealerGroupService.getCity(stateId).subscribe((data: any) => {
      this.cityList = data;
    }, error => {
      console.log(error);
    });
  }

  updateDealerForm() {
    console.log(this.updateform.value)
    this.showSearchGrid = true;
    this.showAddDealer = false;
    this.showEditForm = false;

  }

}
