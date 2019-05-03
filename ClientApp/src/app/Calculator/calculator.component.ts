import { Component } from '@angular/core';

@Component({
  selector: 'calculate',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public firstName: string;
  public lastName: string;
  public programName: string;
  public successText: String;
  public displayText: boolean = false;

  public addDetails() {
    this.successText = "";
    this.displayText = true;
    this.successText = this.firstName + " " + this.lastName + " got successfully enrolled into " + this.programName + " program";
  }

  public clearDetails() {
    this.firstName = "";
    this.lastName = "";
    this.programName = "";
    this.successText = "";
  }

}  
