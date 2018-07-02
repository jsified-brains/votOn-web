import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Feature } from '../interfaces';
import { AppConfig } from '../../appConfig';

@Injectable()
export class FeatureService {
     constructor(private http: Http) {
     }

     getFeatures() {
        return  this.http
         .get(AppConfig.route('features'))
         .map((response: Response) => {
            console.log('Data', response);
            return response.json();

        });
     }

    //  addAlbum(formdata: any) {
    //     return this.http
    //     .post(AppConfig.route('features'), formdata)
    //     .map((res: Response) => res.json());
    //  }
}
