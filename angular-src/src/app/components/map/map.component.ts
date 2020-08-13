import { Component, OnInit } from '@angular/core'

declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})

export class MapComponent implements OnInit {
  latitude: number = 43.840483;
  longitude: number = 18.343583;
 
  map: any;

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([18.343583, 43.840483]),
        zoom: 18
      })
    });
  }
}