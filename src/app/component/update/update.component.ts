import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CreateService } from '../../service/create.service';
import { create } from '../../../../model';
import { error } from 'node:console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{
  item : create | undefined;
 
  constructor(private activeRoute: ActivatedRoute, private update:CreateService, private route:Router){}

  ngOnInit(): void {
    let itemId= this.activeRoute.snapshot.paramMap.get('id');
    console.log(itemId);
     itemId && this.update.itemget(itemId).subscribe((data)=>{
      console.warn(data);
      if(data){
      this.item=data;
      }
    })
  }

  submit(data:create){
    console.log(data);
    if(this.item){
      data.id=this.item.id;
    }
   this.update.PutItem(data).subscribe((result)=>{
    console.log(result);
    if(result){
     alert('data updated successfully'); 
     this.route.navigate(['/index'])
    }
   })
  }
}
