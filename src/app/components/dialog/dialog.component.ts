import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Charac } from 'src/app/classes/charac';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private proServ:ProductService) { }
  //productChar:Charac;
  //product:Product;
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
    });
    this.charac = this.formBuilder.group({
        releaseDate:['',Validators.required],
        platform:['',Validators.required],
      manufacture:['',Validators.required]
    })
  }
  addProduct(){
    /*this.productChar=this.productForm.get('characteristics').value;
    this.product=this.productForm.value;
    this.product.characteristics=this.productChar;*/
    if(this.productForm.valid)
    {
      this.proServ.addProduct(this.productForm.value).subscribe(res => {alert('Added')},err =>{alert('Something Went Wrong')});
    }
  }

 /* get allCharac()
  {
    return this.productForm.get('characteristics') as FormArray;
  }
  addCharac()
  {
    this.allCharac.push(this.formBuilder.group({
      releaseDate:['',Validators.required],
      platform:['',Validators.required],
      manufacture:['',Validators.required]
    }))
  }
  chara()
  {
    this.formBuilder.group({
      releaseDate:['',Validators.required],
      platform:['',Validators.required],
      manufacture:['',Validators.required]
    })
  }*/
}
