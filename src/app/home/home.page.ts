import { Component, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  finalImage: string;

  @ViewChild('myCanvas') canvas: any;

  canvasElement: any;
  canvasPosition: any;
  lastX: number;
  lastY: number;

  currentColour: string = '#1abc9c';
  brushSize: number = 10;

  constructor(public platform: Platform, public renderer: Renderer2, private router: Router) {
    console.log('Hello CanvasDraw Component');
  }

  ngAfterViewInit() {

    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.platform.width() + '';
    this.canvasElement.height = (this.platform.height() - 120) + '';
  }

  handleStart(ev) {
    this.canvasPosition = this.canvasElement.getBoundingClientRect();
    this.lastX = ev.touches[0].pageX - this.canvasPosition.x;
    this.lastY = ev.touches[0].pageY - this.canvasPosition.y;
  }

  handleMove(ev) {

    let ctx = this.canvasElement.getContext('2d');

    let currentX = ev.touches[0].pageX - this.canvasPosition.x;
    let currentY = ev.touches[0].pageY - this.canvasPosition.y;

    /* var imgCorbeille = new Image();
    imgCorbeille.src = `/assets/icon/favicon.png`;
    imgCorbeille.onload = () => {
      ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
      ctx.drawImage(imgCorbeille, currentX - 20, currentY - 20, 40, 40);
    } */

    //Pour en savoir plus sur le dessin de canvas
    // https://developer.mozilla.org/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_text
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColour;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();

    this.lastX = currentX;
    this.lastY = currentY;

  }

  setColor(col: string) {
    this.currentColour = col;
  }

  save() {
    var dataUrl = this.canvasElement.toDataURL();
    var data = dataUrl.split(',')[1];
    this.finalImage = `data:image/jpeg;base64,${data}`;
  }

  goToPDF() {
    this.router.navigate(["generate-pdf"]);
  }
}
