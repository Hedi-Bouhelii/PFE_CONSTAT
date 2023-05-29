import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  currentFile?: File;
  progress = 0;
  message = '';
  formData: FormData = new FormData();
  fileInfos?: Observable<any>;
  fileToUpload: File | any;
  
  imageUrl: string ='';
  imageName: string ='';
  imagePreview: string='';
  constructor(private api: ApiService,private uploadService: UploadService) { }
  ngOnInit(): void {
    
  }
  onImagePicked(event : Event){
      //@ts-ignore: Object is possibly 'null'.
    const file = (event.target as HTMLInputElement).files[0];
    const imageName = file.name;
    this.formData.append('file', file, imageName);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  onUpload(){
    if (!this.fileToUpload) {
      alert('Please select a file to upload.');
      return;
    }
    console.log(this.fileToUpload)
    this.uploadService.upload(this.fileToUpload)
      .subscribe( {
        next: data => {
         console.log(data)
        },
        error: err => {
          console.log(err)
        }
      });
    }
    
  }
