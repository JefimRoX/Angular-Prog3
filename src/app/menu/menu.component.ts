import { Component, Input, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.onViewChecked();
    

  }

  onViewChecked(){
    $(document).ready(function(){
			$('#sidebarCollapse').on('click',function(){
				$('#sidebar').toggleClass('active');
			});
		});  
 
  }
    

  }

