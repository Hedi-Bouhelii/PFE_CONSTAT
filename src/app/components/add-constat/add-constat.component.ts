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
import { Degats } from 'src/app/shared/Degats';
import {  } from 'src/app/shared/Degats';
import { accidentLocation } from 'src/app/shared/accidentLocation';
import { Temoins } from 'src/app/shared/Temoins';
import { ConstatServiceService } from 'src/app/services/constat-service.service';
import { Constat } from 'src/app/shared/Constat';


@Component({
  selector: 'app-add-constat',
  templateUrl: './add-constat.component.html',
  styleUrls: ['./add-constat.component.scss']
})
export class AddConstatComponent implements OnInit {

  constructor(private constatService :ConstatServiceService,private _formBuilder: FormBuilder,private _snackBar: MatSnackBar,private storage:StorageService,private datePipe: DatePipe,private dialog:MatDialog) {}

  @ViewChild('stepper') stepper!: MatStepper;
  formAccident :any={
    refContrat:null,
    ville:null,
    addresse:null,
    debDirection:null,
    finDirection:null,
    degatMateriaux: [],
    degatPhysique:[],
    descrDegat:null,
    accidentPic:null,
    descrDegatMT:null,
    addDescrDegatPhy:null,
    descrDegatPhy:null,
    additionalDegatPhysique:[]
  }
  addPhysicalDamage:any
  selectedOption?:string
  date:any;
  formattedDate:any
  imageUrl: string ='';
  imageName: string ='';
  imagePreview: string='';
  formData:FormData = new FormData();
  fileToUpload: File | any;
  verified?:boolean
  constat: Constat = new Constat()
  
  Vehicules : Vehicule[] = [new Vehicule()];
  Persons : Person[] = [new Person()];
  Location : accidentLocation[] = [new accidentLocation()];
  Temoins : Temoins[] = [new Temoins()];
  onSubmit():void{
    const  {refContrat,
      matricule,
      numVIN,
      cin,
      nomComplet,
      ville,
      addresse,
      debDirection,
      finDirection,
      degatMateriaux,
      descrDegat,
      accidentPic
    } = this.formAccident
    // console.log(this.formAccident)
    const listeIntervenants = [...this.Persons,...this.Vehicules,...this.Location,...this.Temoins]
    console.log('hedi', listeIntervenants)

  }
  /*openDialog() {
    const dialogRef = this.dialog.open(SendToExpertComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }*/
  ngOnInit() {}
  materialDamagePic(event : Event){
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
physicalDamagePic(event : Event){
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

  degatsMateriaux: string[] = ['Bosses et éraflures', 'Vitres brisées ou fissurées', 'Pare-chocs endommagés', 'Rétroviseurs pliés ', 'Phares ou feux arrière endommagés', 'Portes endommagées',  'Châssis  endommagées', 'Roues et jantes endommagées','Fuites de liquides','Ailes et panneaux endommagés'];
  degatsPhysique: string[] = ['Coupures et lacérations', 'Ecchymoses et contusions', 'Fractures et os cassés ', 'Blessures à la tête ', 'Coup du lapin', 'Blessures des tissus mous', 'Brûlures', 'Blessures internes', 'Blessures de la moelle épinière','Amputations '];
  additionalDegatsPhysique: string[] = ['Coupures et lacérations', 'Ecchymoses et contusions', 'Fractures et os cassés ', 'Blessures à la tête ', 'Coup du lapin', 'Blessures des tissus mous', 'Brûlures', 'Blessures internes', 'Blessures de la moelle épinière','Amputations '];

  addCarInfo(){
    this.Vehicules.push(new Vehicule())
    this.Vehicules[this.Vehicules.length - 1].numVIN
    this.Vehicules[this.Vehicules.length - 1].matricule
    this.Vehicules[this.Vehicules.length - 1].email
    this.Vehicules[this.Vehicules.length - 1].nomAgence
    this.Vehicules[this.Vehicules.length - 1].degats = new Degats()
  }
  locationInfo(){
    this.Location[this.Location.length - 1].ville
    this.Location[this.Location.length - 1].adresse
    this.Location[this.Location.length - 1].debDirection
    this.Location[this.Location.length - 1].finDirection
  }

  addPersonInfo(){
    this.Persons.push(new Person())
    this.Persons[this.Persons.length - 1].CIN
    this.Persons[this.Persons.length - 1].nomComplet
    this.Persons[this.Persons.length - 1].email
    this.Persons[this.Persons.length - 1].nomAgence
    this.Persons[this.Persons.length - 1].degats = new Degats()
  }
  addTemoinInfo(){
    this.Temoins.push(new Temoins())
    this.Temoins[this.Temoins.length - 1].nomComplet
    this.Temoins[this.Temoins.length - 1].adresse
    this.Temoins[this.Temoins.length - 1].tel
    
  }
  deleteTemoinInfo(index: number): void {
    this.Temoins.splice(index);
  }
  deleteCarInfo(index: number): void {
    this.Vehicules.splice(index);
  }
  
  deletePersonInfo(index: number): void {
    this.Persons.splice(index);
  }
  verifContract(){
    const refContract= this.formAccident.refContrat
    console.log(refContract)
    if (refContract === 'password'){
      this._snackBar.open("Remplissage de constat autorisé","OK",{
        duration:3000 ,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'snack'});
      this.verified =true
    }
    else {
      this._snackBar.open("Reference Contrat Erroné ou n'existe pas","OK",{
        duration:3000 ,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'snack'});
        this.verified =false
    }
    return this.verified
  }
  
  createConstat(){
    const listIntervenant = [{type:'Person',list:this.Persons},{type:'vehicule',list:this.Vehicules}]
    const listIntervenantId = [{type:'Person',list:this.Persons},{type:'vehicule',list:this.Vehicules}]
    // this.constatService.createConstat(this.constat).subscribe((id)=>{
    //   this.constatService.createIntervenant(listIntervenant,id).subscribe((intervenantId)=>{
        
    //   });
    // });

    // this.constatService.createConstat(this.constat)
    // this.constatService.createIntervenant(listIntervenant,'id');
}

}
