import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.less']
})
export class InterfaceComponent implements OnInit {
	fiveteen =[
	{value : 1, arg :	[0,1,4]}, {value : 2, arg :[1,0,2,5]}, 
	{value : 3, arg :[2,1,3,6]}, {value : 4, arg :[3,2,7]}, 
	{value : 5, arg :[4,5,0,8]}, {value : 6, arg :[5,4,6,1,9]}, 
	{value : 7, arg :[6,5,7,2,10]}, {value : 8, arg :[7,3,6,11]},
	{value : 9, arg :[8,9,4,12]}, {value : 10, arg :[9,5,13,8,10]}, 
	{value : 11, arg :[10,9,11,6,14]}, {value : 12, arg :[11,10,7,15]}, 
	{value : 13, arg :[12,8,13]}, {value : 14, arg :[13,9,14,12]}, 
	{value : 15, arg :[14,10,15,13]}, {value : '', arg :[15,11,14]}		
	];
	visible: boolean = false;
	moves: number = 0;
	buttonName: string = 'Start game';
	time: number = 0;
  constructor() { }

  ngOnInit() {	}
	
	move (arg) {
		let test = 0;
		for(let i = 1; i < arg.length; i++){
			if(this.fiveteen[arg[i]].value === ''){
				let x = this.fiveteen[arg[0]].value;
				this.fiveteen[arg[0]].value = this.fiveteen[arg[i]].value;
				this.fiveteen[arg[i]].value = x;
				this.moves++;		
			}
		}	
		for(let i = 0; i < this.fiveteen.length; i++){
	
			if(this.fiveteen[i].value === this.fiveteen[i].arg[0] + 1){
				test++
			} else {
				test = 0;
			}
		}	
		// console.log(test)
		if(test >= 15){
			console.log('WIN');
		}
	}//	END of method move ()

startGame () {
	this.buttonName = 'Restart game';
	this.visible = true;
	this.moves = 0;
	this.time = 0;
	for(let i = 0; i < this.fiveteen.length; i++){
		let index = Math.floor((Math.random() * 15) + 1)
		let x = this.fiveteen[i].value;
		this.fiveteen[i].value = this.fiveteen[index].value;
		this.fiveteen[index].value = x;
	}
	// setInterval(function(){
	// 	this.time++;
	// }, 1000);
}//	END of method startGame ()



}//	END of class InterfaceComponent
