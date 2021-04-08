import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  consulting = 'We are specialized geotechnical consulting services for residential and commercial developments, and ' +
    'transportation, government and utility projects. Our staffs are expert in preparing geotechnical ' +
    'investigation (soils) report for residential construction to high rise building construction.';

  serviceAreas = 'We provide geotechnical engineering nearest the greater Bay Area counties (Alameda, Contra Costa,' +
    ' Marin, San Mateo, Santa Clara, and San Francisco) and greater Sacramento area counties (Placer, Sacramento,' +
    ' San Joaquin, Sutter, and Yolo)';

  professionalServices = 'Our professional team consisted of licensed Civil Engineers, Geotechnical Engineers, and Engineering\n' +
    '              Geologists, registered in the State of California with over 10 years of working experience in the field of\n' +
    '              geotechnical and earthquake engineering. They are expert in geotechnical site investigations, laboratory\n' +
    '              soil testing, and quality control of earthwork construction and grading operations for various types of\n' +
    '              civil facilities, including single family homes and subdivision residential developments, commercial\n' +
    '              developments, water and waste water facilities, pipelines, transportation, and governmental projects. They\n' +
    '              are specialized in shallow and deep foundation design, conventional and segmental retaining wall design,\n' +
    '              pipelines and treatment plant facilities designs, flexible and rigid pavement design, probabilistic and\n' +
    '              deterministic seismic hazard analysis, liquefaction analysis and slope stability analysis. Their field\n' +
    '              experience includes performing observation and testing during removal and fill placement during rough\n' +
    '              grading, observation and testing for utility trenches and retaining walls during backfilling, and\n' +
    '              subgrade, aggregate base and asphalt concrete.';

  constructor() {
  }

  ngOnInit(): void {
  }

}
