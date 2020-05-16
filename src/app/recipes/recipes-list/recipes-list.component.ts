import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test', 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/17/16/asset/buzzfeed-prod-web-02/sub-buzz-11594-1545083892-7.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*'),
    new Recipe('A test recipe', 'test', 'https://www.foxandbriar.com/wp-content/uploads/2019/04/Creamy-Shrimp-with-basil-and-roasted-Red-peppers-3-of-7.jpg'),
    new Recipe('A test recipe', 'test', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gimmesomeoven.com%2Fwp-content%2Fuploads%2F2018%2F12%2FSalsa-Verde-Steak-Potato-Soup-Recipe-2.jpg&f=1&nofb=1'),
    new Recipe('A test recipe', 'test', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.simplyrecipes.com%2Fwp-content%2Fuploads%2F2012%2F05%2Fsmoked-salmon-hash-vertical-a-1600.jpg&f=1&nofb=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
