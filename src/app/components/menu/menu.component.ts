import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[]= [
   
    {label: 'convert', icon: 'pi pi-fw pi-home'},
    {label: 'about'},

];

  constructor(public router:Router) { }

  ngOnInit() {
  }
  activateMenu(event:any){
    console.log(event);
    this.router.navigate([event.activeItem.label])
    // this.router.navigate(['items'], { relativeTo: this.route });

  }


}
