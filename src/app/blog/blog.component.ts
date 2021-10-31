import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-blog',
  template: `
    <h3>BlogComponent!</h3>

    <h4>
      BlogComponent injects Blog Posts (static HTML generated from Markdown) 
      within the following horizontal rules.
    </h4>

    <hr>

    <!-- This is where Scully will inject the static HTML Blog Post -->
    <scully-content></scully-content>
    
    <hr>

    <h4>BlogComponent template continues</h4>
  `,
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
