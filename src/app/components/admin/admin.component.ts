import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['libelle', 'platform', 'price', 'category','manufacture','photo','releaseDate','availability','action'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService:ProductService,private dialog:MatDialog,private activatedRoute:ActivatedRoute,private http:HttpClient,auth:AuthService) {}
   admin:any;
  products:Product[];
  ngOnInit(): void {
    this.getProducts();
    this.http.get<any>("http://localhost:3500/signupUsers").subscribe(res =>
      {
        this.admin=res;
      })
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{width:"50%",height:"80%"});

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'save')
      {
        this.getProducts();
      };
    });
  }
  getProducts()
  {
this.productService.getProducts().subscribe(data => { 
      this.dataSource = new MatTableDataSource(data),
      this.dataSource.paginator=this.paginator,
      this.dataSource.sort = this.sort,
      console.log(this.products);});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProduct(row:any)
  {
    this.dialog.open(DialogComponent,{width:"50%",height:"80%",data:row}).afterClosed().subscribe(result =>
      {
        if(result=='update')
        {
          this.getProducts();
        }
      });
  }

  deleteProduct(id:number)
  {
    let accept=prompt('Are you sure you want to Delete this product');
    if(accept!="yes")
    {
      return false;
    }
    else
    {
      this.productService.deleteProduct(id).subscribe(res =>{
        alert('Product Deleted Sucessfully');
        this.getProducts();
      })
      return true;
    }
    
  }
}
