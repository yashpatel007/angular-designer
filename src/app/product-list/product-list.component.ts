import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products: any = [
    {
      title: "BOSE QC35 II",
      description: " Best noice cancelling headphones 2019",
      imageUrl: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/product_silo_images/qc35_ii_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.1000.1000.png",
      link: "https://www.bose.com/en_us/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html?mc=25_PS_35_BO_00_GO_&gclid=CjwKCAiAuoqABhAsEiwAdSkVVCB-XrYB5nY3GKBLYIyigYyI_41MZ7G0x7qt3GQ2aG-YIFr7EIYC3hoCcHgQAvD_BwE&gclsrc=aw.ds#v=qc35_ii_black"
    },
    {
      title: "Sony XM3000",
      description: "Best noice cancelling headphones in 2020",
      imageUrl: "https://www.sony.com/image/eb0062b3db03748efc7f5ca3fd82ccc5?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
      link: "https://www.sony.com/electronics/headband-headphones/wh-1000xm3"
    },
    {
      title: "Bang & Olufsen",
      description: "Best luxury headphones",
      imageUrl: "https://images.ctfassets.net/8cd2csgvqd3m/vL8xhIqaS8yMbepCoCaZ9/d9462657d7bda0ad8c348028ef0dac26/H95_hero.png?q=90&fm=png&w=720&h=720&fit=fill",
      link: "https://www.bang-olufsen.com/en/headphones/beoplay-h95?variant=beoplay-h95-greymist"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
