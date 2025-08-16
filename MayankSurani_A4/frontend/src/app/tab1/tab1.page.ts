import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';           
import { FormsModule } from '@angular/forms';             
import { IonicModule } from '@ionic/angular';            
import { ItemService } from '../item.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
})
export class Tab1Page {
  name = '';
  price: number | null = null;

  constructor(private itemService: ItemService) {}

  addItem() {
    if (!this.name || this.price == null) {
      alert('Please enter name and price');
      return;
    }

    this.itemService.addItem({ name: this.name, price: this.price }).subscribe({
      next: () => {
        alert('Item added successfully');
        this.name = '';
        this.price = null;
      },
      error: (err) => console.error(err)
    });
  }
}