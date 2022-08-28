import { Participant } from './../../Models/participant';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as XLSX from 'xlsx';
const { read, write, utils } = XLSX;
type AOA = any[][];
@Component({
  selector: 'app-liste-participants',
  templateUrl: './liste-participants.component.html',
  styleUrls: ['./liste-participants.component.scss'],
})
export class ListeParticipantsComponent implements OnInit {
  @Input() affiche: number;
  @Input() ListeParticipant: Participant[];
  @Output() getParticipantsList: EventEmitter<any> = new EventEmitter();
  data: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
      this.getParticipantsList.emit(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }
  constructor() {}

  ngOnInit(): void {}
}
