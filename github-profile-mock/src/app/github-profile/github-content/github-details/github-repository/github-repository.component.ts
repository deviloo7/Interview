import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repository',
  templateUrl: './github-repository.component.html',
  styleUrls: ['./github-repository.component.scss']
})
export class GithubRepositoryComponent implements OnInit {

  constructor() { }

  staticData=['hackathon1','hackathon2','hackathon3','hackathon4']
  filterData=['hackathon1','hackathon2','hackathon3','hackathon4']

  ngOnInit(): void {
  }

  search(data: any)
  {
    console.log(data)
   this.filterData= this.staticData.filter((element)=>{
     console.log(element,data)
     return element ===data
    })
  }

}
