import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Counter-App';

count:number=0;

clickIncrease = () => {
  if(this.count<=9)
  this.count=this.count+1;

}

clickDec=()=>{
  if(this.count>=1)
  this.count=this.count-1;
}

clickReset=()=>{
  this.count=0;

}


}
