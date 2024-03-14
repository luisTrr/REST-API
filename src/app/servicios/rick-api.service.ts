import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';
  private urlEpisodio = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get(this.apiUrl);
  }

  getCharacters(page: number) {
    return this.http.get(`${this.apiUrl}/?page=${page}`);
  }

  getAllEpisodio(){
    return this.http.get(this.urlEpisodio);
  }
}