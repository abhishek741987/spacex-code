import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../service/spacex.service';
interface Option {
  value: string;
  name: string;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  launchDetails: any = [];
  selectedValue: string;
  options: Option[] = [
    { value: '1', name: 'All' },
    { value: '2', name: 'Default' },
    { value: '3', name: 'Launch Success' },
    { value: '4', name: 'Launch & Land' }
  ];
  defaultFilter: number = 2;

  loading: boolean = true;

  constructor(private service: SpacexService) {
    this.loadDetails();
  }

  ngOnInit(): void {
  }


  loadDetails() {

    this.service.fetchLaunchList(this.defaultFilter).subscribe((result) => {
      this.loading = false;
      this.launchDetails = result;
    })
  }

  onChange(e) {
    this.loading = true;
    this.service.fetchLaunchList(e).subscribe((result) => {
      this.loading = false;
      this.launchDetails = result;
    })
  }

}
