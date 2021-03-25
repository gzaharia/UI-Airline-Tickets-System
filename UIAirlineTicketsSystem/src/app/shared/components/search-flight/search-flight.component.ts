import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {

  public departureForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) { 

    this.initDepartureForm();
  }

  get oneWayValue(): boolean{
    return this.departureForm.get('oneWay').value;
  }

  ngOnInit(): void {
  }
  private initDepartureForm():void{
    this.departureForm= this.formBuilder.group({
      fromDestination: [null],
      toDestination: [null],
      fromDate: [null, Validators.compose([Validators.required]) ],
      toDate: [null],
      passengers: [null],
      oneWay:[true]
    });
  }
  public onGetOneWayValue(isChecked:boolean):void{
    this.departureForm.get('oneWay').setValue(isChecked);
    console.log(this.oneWayValue);
    
  }
  public onSubmit():void{
    console.log(this.departureForm.value);
  }

}
