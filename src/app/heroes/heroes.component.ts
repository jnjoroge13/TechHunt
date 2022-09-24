import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";
@Component({
	selector: "app-heroes",
	templateUrl: "./heroes.component.html",
	styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
	selectedHero?: Hero;
  onSelect(hero: Hero): void {
    if (this.selectedHero == hero) {
      this.messageService.add(`${this.selectedHero.name} unselected`)
			this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
      this.messageService.add(`${this.selectedHero.name} selected`)
		}
	}

	heroes: Hero[] = [];

	constructor(private heroService: HeroService, private messageService:MessageService) {}
	getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
	}
	ngOnInit(): void {
		this.getHeroes();
	}
}
