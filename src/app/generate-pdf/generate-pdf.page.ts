import { Component, OnInit } from '@angular/core';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.page.html',
  styleUrls: ['./generate-pdf.page.scss'],
})
export class GeneratePdfPage implements OnInit {

  pdfObj;

  constructor() { }

  ngOnInit() {
  }


  generatePDF() {
    var docDefinition = {
      info: {
        title: 'Test PDF',
        author: 'Alban Rochet',
        subject: 'Tutoriel test',
      },
      content: [
        {text: "Test"}
      ]
    };

    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.pdfObj.download();
  }
}
