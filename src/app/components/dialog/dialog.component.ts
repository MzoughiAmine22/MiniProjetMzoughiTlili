import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private proServ:ProductService,private dialogRef: MatDialogRef<DialogComponent>) { }
  charac:FormGroup;
  productForm:FormGroup
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      libelle : ['',Validators.required],
      category : ['Game',Validators.required],
      price : [0,Validators.required],
      photo : ['',Validators.required],
      platform : ['',Validators.required],
      manufacture : ['',Validators.required],
      availability : ['true',Validators.required],
      description : ['type',Validators.required],
      releaseDate:['',Validators.required],
    })
  }
  addProduct(){
    if(this.productForm.valid)
    {
      this.proServ.addProduct(this.productForm.value).subscribe(res => {
        alert('Added');
        this.productForm.reset();
        this.dialogRef.close('save');
      },
        err =>{alert('Something Went Wrong')});
    }
  }
}
