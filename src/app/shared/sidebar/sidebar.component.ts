import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public get historial(): string[] {
    return this._gifsService.historial;
  }

  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {}

  public lastGifs(item: string) {
    this._gifsService.buscarGifs(item);
  }
}
