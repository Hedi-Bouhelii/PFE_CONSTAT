import { Component, OnInit } from '@angular/core';
import { Constat } from 'src/app/shared/Constat';
import { Person } from 'src/app/shared/Person';
import { Temoins } from 'src/app/shared/Temoins';
import { Vehicule } from 'src/app/shared/Vehicule';
import { accidentLocation } from 'src/app/shared/accidentLocation';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { SendToExpertComponent } from '../send-to-expert/send-to-expert.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-verifier-constat',
  templateUrl: './verifier-constat.component.html',
  styleUrls: ['./verifier-constat.component.scss']
})
export class VerifierConstatComponent implements OnInit {
  constructor(private api: ApiService,private dialog:MatDialog,private _snackBar: MatSnackBar) { }
  openExpertLis() {
    const dialogRef = this.dialog.open(SendToExpertComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openSnack(){
    this._snackBar.open("Votre note a été envoyée avec succes ",
        "OK",
        {duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass:'snack'});
  }
    fakeConstat:Constat= {
    date:'25-07-2023',
    lieu:'Ben Arous',
    demandeur:'Ahmed Abidi',
    agenceA:'Star',
    agenceB:'AMI',
    intervenantNomCompletA:'Hedi Bouheli',
    intervenantAdresseA:'Tunis',
    intervenantAdresseB:'Ben arous',
    intervenantTelA:55566950,
    intervenantTelB:93494812,
    vehiculeMatA:'12 tunis 155',
    vehiculeMatB:'72 tunis 202',
    numVINA:'5584258685',
    numVINB:'2030105595',
    debDirectionA:'Rades',
    finDirectionA:'Tunis',
    debDirectionB:'Mhamdya',
    finDirectionB:'Tunis',
    degatsMatA:'Vitres brisées',
    degatsMatB:'Pare-chocs endommagés',
    temoinNomCompletA:'Mohamed Mathlouthi',
    temoinAdresseA:'Rades',
    temoinTelA:55220033,
    temoinNomCompletB:'Aziz Hamrouni',
    temoinAdresseB:'Ben Arous',
    temoinTelB:90999066,
    
    
}
confirmed =false;
Vehicules : Vehicule[] = [new Vehicule()];
Persons : Person[] = [new Person()];
Location : accidentLocation[] = [new accidentLocation()];
Temoins : Temoins[] = [new Temoins()];
degatsMateriaux: string[] = ['Bosses et éraflures', 'Vitres brisées ou fissurées', 'Pare-chocs endommagés', 'Rétroviseurs pliés ', 'Phares ou feux arrière endommagés', 'Portes endommagées',  'Châssis  endommagées', 'Roues et jantes endommagées','Fuites de liquides','Ailes et panneaux endommagés'];
degatsPhysique: string[] = ['Coupures et lacérations', 'Ecchymoses et contusions', 'Fractures et os cassés ', 'Blessures à la tête ', 'Coup du lapin', 'Blessures des tissus mous', 'Brûlures', 'Blessures internes', 'Blessures de la moelle épinière','Amputations '];
additionalDegatsPhysique: string[] = ['Coupures et lacérations', 'Ecchymoses et contusions', 'Fractures et os cassés ', 'Blessures à la tête ', 'Coup du lapin', 'Blessures des tissus mous', 'Brûlures', 'Blessures internes', 'Blessures de la moelle épinière','Amputations '];
  confirmer(){
    console.log(this.confirmed)
    return this.confirmed = true
    
  }

  ngOnInit(): void {
  }

}
