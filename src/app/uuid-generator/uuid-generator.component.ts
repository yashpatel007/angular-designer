import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { v4 as uuidv4, v1 as uuidv1 } from 'uuid';



@Component({
  selector: 'uuid-generator',
  templateUrl: './uuid-generator.component.html',
  styleUrls: ['./uuid-generator.component.css']
})
export class UuidGeneratorComponent implements OnInit {

  uuidValue: any;

  uuidV1: any;

  copied: boolean = false;

  v4UUIDs: Array<String> = [];
  v1UUIDs: Array<String> = [];


  constructor() { }

  ngOnInit(): void {
    this.generateUUID();
  }

  generateUUID() {
    this.uuidValue = uuidv4();
    return this.uuidValue;
  }

  copyUuid() {
    const el = document.createElement('textarea');
    el.value = this.uuidValue;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.copied = true;
  }


  generateMultiplev4UUID(count: any) {
    count = <number>count;
    this.v4UUIDs = [];
    for (let i = 0; i < count; i++) {
      this.v4UUIDs.push(uuidv4());
    }
  }

  generateMultiplev1UUID(count: any) {
    count = <number>count;
    this.v1UUIDs = [];
    for (let i = 0; i < count; i++) {
      this.v1UUIDs.push(uuidv1());
    }
  }


}
