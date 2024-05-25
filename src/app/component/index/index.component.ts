import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../service/create.service';
import { create } from '../../../../model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterOutlet,RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
viewlist:undefined | create[];
sn=1;
constructor(private view:CreateService, private router:Router) {  
}

ngOnInit(): void {
 this.list();
}

deleteitem(id:number){
  console.log("test id", id);
  this.view.deleteitem(id).subscribe((result)=>{
    console.log("delete", result);
    if(result){
      alert("deleted successfully");
      this.list();
    }
  })
}

list(){
  this.view.viewlist().subscribe((result)=>{
    console.log(result);
    if(result){
     this.viewlist= result;
    
    }
    })
}


}
