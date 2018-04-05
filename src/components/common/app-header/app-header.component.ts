import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  public startOver: boolean = true;
  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  gotoPage = (pageName) => {
    switch (pageName) {
      case 'Poll':
        console.log('in switch Poll case');
        this.router.navigate(['/poll'] );
        break;
      case 'Login':
      console.log('in switch Login case');
        this.router.navigate(['/login']);
        break;
      case 'Signup':
        console.log('in switch Signup case');
        this.router.navigate(['/signup']);
        break;
      default:
        this.router.navigate(['/']);
    }
    
  }

}
