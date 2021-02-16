import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import * as questions from '../../assets/questions.json'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  //questions = []
  questions: any[] = (questions as any).default;

  constructor() { }

  ngOnInit(): void {
    console.log(questions)
  }

}
