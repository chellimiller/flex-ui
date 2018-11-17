import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'fui-grid',
  template: '<ng-content></ng-content>',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @HostBinding('class') className: string;

  @Input('config')

  constructor() { }

  ngOnInit() {
  }

}
