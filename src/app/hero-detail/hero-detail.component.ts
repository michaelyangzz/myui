import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { states, Address, Hero } from '../data-model';
import { HeroService } from '../hero.service';
import { forbiddenNameValidator } from '../forbidden-name.directive';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  heroForm: FormGroup;
  states = states;
  @Input() hero: Hero;
  nameChangeLog: string[] = [];
  constructor(private fb: FormBuilder, private heroservice: HeroService) {
    this.createForm();
    this.logNameChange();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4)
      ], forbiddenNameValidator(/bob/i)],
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name
    });

    this.setAddresses(this.hero.addresses);
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }

  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroservice.updateHero(this.hero).subscribe(/* error handling */);
    this.rebuildForm();
  }
  revert() { this.rebuildForm(); }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }
}
