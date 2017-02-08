import {Component, OnInit} from '@angular/core';

import {InternService} from '../../intern.service';
import {MapService} from '../../map.service';
import {Marker} from '../../marker';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    zoom: number = 2;
    lat: number = 51.673858;
    lng: number = 7.815982;

    markers: Marker[] = [];

    constructor(
        private internService: InternService,
        private mapService: MapService
    ) {}

    ngOnInit() {
      this.getMarkers();
    }

    getMarkers() {
      this.internService
        .getInterns()
        .then(interns => {
          for (let i = 0; i < interns.length; i++) {
            this.mapService.getLocation((interns[i].city +', '+ interns[i].country), (interns[i].firstName + ' ' + interns[i].lastName))
              .then(marker => this.markers[i] = marker)
          }
          console.log(this.markers);
        })
    }

    clickedMarker(index: number) {
        console.log('marker clicked ' + (index + 1));
    }
}
