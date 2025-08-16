import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';           
import { FormsModule } from '@angular/forms';             
import { IonicModule } from '@ionic/angular';            
import { ItemService, Item } from '../item.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class Tab2Page implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getItems().subscribe({
      next: (data) => this.items = data,
      error: (err) => console.error(err)
    });
  }
}
