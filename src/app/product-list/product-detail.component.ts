import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct[];

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = [{
        'productId':  55,
        'productName': 'Saw',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2016',
        // tslint:disable-next-line:quotemark
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
    }];
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
