import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skill="skills";
  frontEnd(){
    this.skill="HTML, CSS, JavaScript"
  }
backEnd(){
    this.skill="PHP, MySQL"
  }


VersionControl(){ 
  this.skill="Git & GitHub"}
ProblemSolving() {
  this.skill="LeetCode (JavaScript)"}
}