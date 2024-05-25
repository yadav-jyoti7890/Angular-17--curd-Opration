import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CreateService } from '../../service/create.service';
import { create } from '../../../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent{
  constructor(private add:CreateService, private router:Router){}
   submit(data:create){
    console.log("hii", data);
     this.add.create(data).subscribe((result)=>{
      console.log("result", result);
      if(result){
        alert("created successfully");
        this.router.navigate(['/index'])
      }
     });
   }
}
