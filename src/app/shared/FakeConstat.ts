import { Driver } from "./Driver";
import { Insured } from "./Insured";
import { Person } from "./Person";
import { Vehicule } from "./Vehicule";
import { accidentLocation } from "./accidentLocation";

export class FakeConstat {
    date?:'25-07-2023';
    lieu?:'Ben Arous';
    demandeur?:'Ahmed Abidi';
    agenceA?:'Star';
    agenceB?:'AMI';
    intervenantNomCompletA?:'Hedi Bouheli';
    intervenantAdresseA?:'Tunis';
    intervenantAdresseB?:'Ben arous';
    intervenantTelA?:55566950;
    intervenantTelB?:93494812;
    vehiculeMatA?:'12 tunis 155';
    vehiculeMatB?:'72 tunis 202'
    numVINA?:'5584258685';
    numVINB?:'2030105595';
    debDirectionA?:'Rades';
    finDirectionA?:'Tunis';
    debDirectionB?:'Mhamdya';
    finDirectionB?:'Tunis';
    degatsMatA?:'Vitres brisées';
    degatsMatB?:'Pare-chocs endommagés';
    temoinNomCompletA?:'Mohamed Mathlouthi';
    temoinAdresseA?:'Rades';
    temoinTelA?:55220033;
    temoinNomCompletB?:'Aziz Hamrouni';
    temoinAdresseB?:'Ben Arous';
    temoinTelB?:90999066;
}