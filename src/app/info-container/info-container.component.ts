import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.css']
})
export class InfoContainerComponent implements OnInit {


  info: any = {
    title: "About",
    image: true,
    rounded: true,
    imageUrl: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    description: "Cervantes wrote that the first chapters were taken from, and the rest were translated from an Arabic text by the Moorish author Cide Hamete Benengeli. This metafictional trick appears to give a greater credibility to the text, implying that Don Quixote is a real character and that the events related truly occurred several decades prior to the recording of this account. However, it was also common practice in that era for fictional works to make some pretense of being factual, such as the common opening line of fairy tales "
  }
  constructor() { }

  ngOnInit(): void {
  }

}
