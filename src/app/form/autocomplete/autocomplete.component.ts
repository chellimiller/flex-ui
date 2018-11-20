import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'demo-autocomplete',
  templateUrl: './autocomplete.component.html'
})
export class AutocompleteComponent implements FlexComponent, AutocompleteComponentData, AutocompleteComponentConfig, OnInit {


  @Input() data: AutocompleteComponentData;
  @Input() config: AutocompleteComponentConfig;

  public get options(): AutocompleteComponentData['options'] {
    return (this.data && this.data.options) ? this.data.options : [];
  }

  public get placeholder(): string {
    return (this.config && this.config.placeholder) ? this.config.placeholder : '';
  }

  public formControl: FormControl = new FormControl();
  public filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  private filter(value: string): string[] {
    const filterValue: string = value.toLowerCase();
    return this.options.filter((option) => (option.toLowerCase().indexOf(filterValue) === 0));
  }
}

export interface FlexComponent {
    data: FlexComponentData;
    config: FlexComponentConfig;
}

export type FlexComponentData = AutocompleteComponentData;
export type FlexComponentConfig = AutocompleteComponentConfig;

export interface AutocompleteComponentData {
  options: string[];
}

export interface AutocompleteComponentConfig {
  placeholder: string;
}
