import { Injectable } from '@angular/core';
import {MapsAPILoader} from 'angular2-google-maps/core';
import {Marker} from './marker';
import {Observable, Observer} from 'rxjs';

import 'rxjs/add/operator/toPromise';

declare let google: any;

@Injectable()
export class MapService {

  constructor(
    private mapsAPILoader: MapsAPILoader) { }

  getLocation(address: string, label: string): Promise<Marker> {
    return this.mapsAPILoader.load().then(() => {
      let geocoder = new google.maps.Geocoder();
      return Observable.create(observer => {
        geocoder.geocode({'address': address}, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            observer.next(results);
            observer.complete();
          } else {
            console.log('Error - ', results, ' & Status - ', status);
            observer.next({});
            observer.complete();
          }
        });
      }).toPromise().then(results => {
        let marker = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
          label: label
        };
        return marker as Marker
      })
    });
  }
}
