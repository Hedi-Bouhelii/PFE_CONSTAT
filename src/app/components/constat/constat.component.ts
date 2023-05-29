import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder,FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { StorageService } from 'src/app/services/storage.service';
import { Person } from 'src/app/shared/Person';
import { Vehicule } from 'src/app/shared/Vehicule';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SendToExpertComponent } from '../send-to-expert/send-to-expert.component';
import { FakeConstat } from 'src/app/shared/FakeConstat';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-constat',
  templateUrl: './constat.component.html',
  styleUrls: ['./constat.component.scss']
})
export class ConstatComponent implements OnInit {

  constructor(private storage:StorageService,private datePipe: DatePipe,private dialog:MatDialog) {}
  role:any
  user:any
  formattedDate:any
  ngOnInit() {
    this.role =this.storage.getRole();
    console.log(this.role)
    if (this.role ==='ASSURE'){
    this.user = this.storage.getUser();
    }
    this.formattedDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.formattedDate);
  }
  generatePDF() {
    const element:any = document.getElementById('pdfContent');
  
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('download.pdf');
    });
  }
}
