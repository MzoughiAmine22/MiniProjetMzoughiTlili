import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import {MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/classes/product';
import { Commentaires } from 'src/app/classes/commentaires';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private proServ:ProductService,private dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) private editData :any) { }
  charac:FormGroup;
  buttonAction:string = "Save";
  productForm:FormGroup;
  product:Product;
  oldProduct:Product;
  comments:Commentaires[];
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
    });
    this.proServ.getProduitById(this.editData.id).subscribe(res =>{
      this.oldProduct=res;
      this.comments=res.comments;
    })
    
    if(this.editData)
    {
      this.buttonAction="Update";
      this.productForm.controls['libelle'].setValue(this.editData.libelle);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['platform'].setValue(this.editData.platform);
      this.productForm.controls['manufacture'].setValue(this.editData.manufacture);
      this.productForm.controls['releaseDate'].setValue(this.editData.releaseDate);
      this.productForm.controls['photo'].setValue(this.editData.photo);
      this.productForm.controls['description'].setValue(this.editData.description);
    }
  }
  addProduct()
  {
    if(!this.editData){
    if(this.productForm.valid)
    {
      this.product=this.productForm.value;
      this.product.comments=[];
      this.proServ.addProduct(this.product).subscribe(() => {
        alert('Added');
        this.productForm.reset();
        this.dialogRef.close('save');
      },
        ()=>{alert('Something Went Wrong')});
    }
  }
  else
  {
    this.updateProduct();
  }
  }
  updateProduct()
  { 
    this.product=this.productForm.value;
    this.product.comments=this.comments;
    this.proServ.putProduct(this.product,this.editData.id).subscribe(
       ()=>{
        alert('Product Updated Successfully');
        this.productForm.reset();
        this.dialogRef.close('update');
      }
    ) 
  }
}
