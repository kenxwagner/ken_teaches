export class MyListComponent implements OnInit {
  people: People[];
  selectedPeople: People;

  constructor(private service: MyService) { }

  ngOnInit() {
    this.people = this.service.getPeople();
  }

  selectPeople(people: people) { this.selectedPeople = people; }
}