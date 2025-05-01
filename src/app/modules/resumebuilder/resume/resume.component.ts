import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
declare var $: any;
declare const window: any;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resumeForm:FormGroup |any;

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  nextPage()
  { window.scrollTo(0,300)
    var i, items = $(".myitem"), pane = $(".tab-pane");
    for (i = 0; i < items.length; i++) {
      if ($(items[i]).hasClass("active") == true) {
        break;
      }
    }

    if (i < items.length - 1) {
      // for tab
      $(items[i]).removeClass("active");
      $(items[i + 1]).addClass("active complete ");
      // for pane
      $(pane[i]).removeClass("show active");
      $(pane[i + 1]).addClass("show active");
    }

  }

  previousPage()
  {
    var i, items = $(".myitem"), pane = $(".tab-pane");
    // console.log('previous btn clicked!');
    for (i = 0; i < items.length; i++) {
      if ($(items[i]).hasClass("active") == true) {
        break;
      }
    }
    if (i != 0) {
      // for tab
      $(items[i]).removeClass("active complete");
      $(items[i - 1]).addClass("active");
      // for pane
      $(pane[i]).removeClass("show active complete");
      $(pane[i - 1]).addClass("show active");
    }
  }

  initForm(){
    this.resumeForm = this._fb.group({
      personalInfo: this._fb.group({
        name: [''],
        email: [''],
        phone: [''],
        address: ['']
      }),
      education: this._fb.array([this.addEducation()]),
      experience: this._fb.array([this.addExperience()]),
      skills: this._fb.array([this.addSkill()]),
    });

    // console.log(this.resumeForm.value);
  }


  // Method to add a new education entry
  get education():FormArray {
    return this.resumeForm.get('education') as FormArray;
  }

  addEducation() {
   return this._fb.group({
      degree: [''],
      institution: [''],
      year: ['']
    });

  }

  removeEducation(index: number) {
    this.education.removeAt(index);
  }
  removeExperience(index: number) {
    this.experience.removeAt(index);
  }
  removeSkill(index: number) {
    this.skill.removeAt(index);
  }
  // Method to add a new experience entry
  get experience():FormArray {
    return this.resumeForm.get('experience') as FormArray;
  }

  addExperience() {
     return this._fb.group({
      jobTitle: [''],
      company: [''],
      year: [''],description:['']
    });

  }
  // Method to add a new skill
  get skill():FormArray {
    return this.resumeForm.get('skills') as FormArray;
  }

  addSkill() {
   return this._fb.group({
      name:[''],
      skill: [''],
      proficiency: ['']
    });

  }

  // Method to download the resume as a PDF
  downloadResume() {
    // Logic to generate and download the resume as a PDF
    console.log('Downloading resume...');
  }

}
