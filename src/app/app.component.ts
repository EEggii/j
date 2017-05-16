import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '졸업 프로젝트!';
  wordArr = ['사랑', '당신', '나', '옷', '산'];
  imgUrlArr = ['../assets/love.jpg', '../assets/you.jpg', '../assets/i.jpg', '../assets/cloth.jpg', '../assets/mountain.jpg'];
  selected;
  checked;
  correct;
  input;

  constructor () {
    this.selected = Math.floor(Math.random() * 5);
  }

  random () {
    this.checked = false;
    this.correct = false;
    this.selected = Math.floor(Math.random() * 5);
    this.input = '';
  }

  check () {
    this.checked = true;
    console.log(this.input);
    if(this.input === this.wordArr[this.selected]) {
      this.correct = true;
    } else {
      this.correct = false;
    }
  }
}
