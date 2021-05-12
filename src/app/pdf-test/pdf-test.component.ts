import { Component, OnInit } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf-test',
  templateUrl: './pdf-test.component.html',
  styleUrls: ['./pdf-test.component.css']
})
export class PdfTestComponent implements OnInit {
  //pdf content
  public docDefinition = {
    header: 'Resume',
    content: [
      {
        text: 'Salem DH',
        fontSize: 16,
        alignment: 'center',
        color: '#047886'
      },
      {
        text: 'INVOICE',
        fontSize: 20,
        bold: true,
        alignment: 'center',
        decoration: 'underline',
        color: 'skyblue'
      },
      {
        text: 'Freelancer Details',
        style: 'sectionHeader'
      },
      {
        columns: [
          [
            {
              text: "Salem Dhouimir",
              bold: true
            },
            { text: "street of sousse 5021"},
            { text: "salem.dhouimir@ensi-uma.tn" },
            { text: "+216 29 161 373" }
          ],
          [
            {
              text: `Date: ${new Date().toLocaleString()}`,
              alignment: 'right'
            },
            {
              text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
              alignment: 'right'
            }
          ]
        ]
      },
      {
        text: 'Order Details',
        style: 'sectionHeader'
      },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 'auto', 'auto'],
          body: [
            ['Language', 'skills', 'education', 'date'],
            ['French', 'Java', 'ensi', '19/05/2020'],
            ['english', 'c++', 'ensi', '29/05/2020'],
            ['arabic', 'linux', 'ensi', '29/05/2021'],

          ]
        }
      },
      {
        columns: [
          [{ qr: "salem", fit: '50' }],
          [{ text: 'Signature', alignment: 'right', italics: true }],
        ]
      },
      {
        ul: [
          'Order can be return in max 10 days.',
          'Warrenty of the product will be subject to the manufacturer terms and conditions.',
          'This is system generated invoice.',
        ],
      }
    ],
    styles: {
      sectionHeader: {
        bold: true,
        decoration: 'underline',
        fontSize: 14,
        margin: [0, 15, 0, 15]
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

  //create and open pdf in new window
  onOpen() {

    pdfMake.createPdf(this.docDefinition).open();

  }
  //create and print pdf
  onPrint() {

    pdfMake.createPdf(this.docDefinition).print();
  }
  //create and download pdf
  onDownload() {

    pdfMake.createPdf(this.docDefinition).download();
  }
}
