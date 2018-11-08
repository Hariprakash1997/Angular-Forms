import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;
  productName: AbstractControl;

  constructor( fb: FormBuilder ) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, skuValidator
      ])],
      productName: ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('Changed value to : ', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('Form changed : ', form);
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log(value);
  }

}

function skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
}
