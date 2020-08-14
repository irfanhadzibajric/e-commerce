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
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 14
      })
    });
    this.addPoint(this.latitude, this.longitude);
  }

  addPoint(lat: number, lng: number) {
    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: "../../../assets/pin.png"
        })
      })
    });
    this.map.addLayer(vectorLayer);
  }
}