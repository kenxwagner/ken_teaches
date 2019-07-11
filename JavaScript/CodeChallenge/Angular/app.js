// app.js

const { Component, VERSION } = ng.core;

const colorMap=[
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <li *ngFor="let food of foods; let i = index" class="{{food.color}}">
      <span class="changeColor" (click)="changeColor(i)">&#9711;</span>
      <span class="changeColor" (click)="makeBold(i)">&#9711;</span>
      <span class="{{food.isBold}}">{{food.description}}</span>
    </li>
`
})
class AppComponent {
  title="Food menu";
  foods=[
    {"description": "hamburger", "color": "red", "isBold": "notBold"},
    {"description": "sandwich", "color": "red", "isBold": "notBold"},
    {"description": "pizza", "color": "red", "isBold": "notBold"},
    {"description": "sushi", "color": "red", "isBold": "notBold"},
    {"description": "rice", "color": "red", "isBold": "notBold"},
    {"description": "soup", "color": "red", "isBold": "notBold"}
  ];
  constructor() {
  }
  //create a click event that cycles through the CSS color list provided.
  // this.foods[2]
  // colorMap.indexOf('red') -> index of 0
  
  // 1. check the current color
  // 2. cycle to the next color
  // 3. assign the new color
  // 4. if we're at purple, go back to red
  
  // colorMap.length returns the length of the array - 6
  changeColor(itemNumber) {
     //this.foods[itemNumber].color = "green";
    var currentColor = this.foods[itemNumber].color;
    // if itemNumber is greater than colormap.length then itemNumber goes to 0;
  
    var nextColorNumber = colorMap.indexOf(currentColor) + 1;
      if (nextColorNumber == colorMap.length) {
      nextColorNumber = 0;
    } 
    var nextColorString = colorMap[nextColorNumber];
    this.foods[itemNumber].color = nextColorString;
    
    //console.log(this.foods[itemNumber].color); // red index is 0
  }
  // when you click this, the item will become bold
  makeBold(itemNumber) {
   this.foods[itemNumber].isBold = "bold";
  }
}




// main.js
const { BrowserModule } = ng.platformBrowser;
const { NgModule } = ng.core;
const { CommonModule } = ng.common;

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
class AppModule {}

const { platformBrowserDynamic } = ng.platformBrowserDynamic; 

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log('hello world');