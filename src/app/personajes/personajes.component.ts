import { Component, OnInit } from '@angular/core';
import { RickmortyService } from '../servicios/rick-api.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  characters: any[] = [];
  currentPage: number = 1;
  searchName: string = '';
  totalPages: number = 0;
  pages: number[] = [];

  constructor(private rickmortyService: RickmortyService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.rickmortyService.getCharacters(this.currentPage).subscribe((data: any) => {
      this.characters = data.results;
      this.totalPages = data.info.pages;
      this.generatePagesArray();
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadCharacters();
  }

  generatePagesArray() {
    this.pages = Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  filterCharacters() {
    if (this.searchName.trim() === '') {
      this.loadCharacters();
    } else {
      this.characters = this.characters.filter((character: any) =>
        character.name.toLowerCase().includes(this.searchName.toLowerCase())
      );
    }
  }
  changePageSelect(event: Event) {
    const selectedPage = (event.target as HTMLSelectElement).value;
    this.currentPage = parseInt(selectedPage);
    this.loadCharacters();
  }
  firstPage() {
    this.currentPage = 1;
    this.loadCharacters();
  }

  lastPage() {
    this.currentPage = this.totalPages;
    this.loadCharacters();
  }
}