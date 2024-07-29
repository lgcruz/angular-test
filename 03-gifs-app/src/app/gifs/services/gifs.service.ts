import { Injectable } from '@angular/core';
import { Gif, Gifs, SearchResponse } from '../interfaces/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _gifsList: Gif[] = [];

  private apiKey: string = 'xwGO7hcGck9NK9SyIJ6zjpnGdK47UPb6';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs/';

  private _tagsHistory: string[] = [];

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  get gifsList(): Gif[] {
    return [...this._gifsList];
  }

  private organizeHistory(newTag: string) {
    newTag = newTag.trim().toLowerCase();

    if (this._tagsHistory.includes(newTag)) {
      this._tagsHistory = this._tagsHistory.filter((tag) => {
        tag = tag.trim().toLowerCase();
        return tag !== newTag;
      });
    }
    this._tagsHistory.unshift(newTag);

    if (this._tagsHistory.length > 10) {
      this._tagsHistory.pop();
    }
  }

  async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get<SearchResponse>(`${this.serviceUrl}search`, { params })
      .subscribe((resp) => {
        this._gifsList = resp.data;
        console.log(resp.data);
      });

    // const resp = await fetch(
    //   'https://api.giphy.com/v1/gifs/search?api_key=xwGO7hcGck9NK9SyIJ6zjpnGdK47UPb6&q=naruto&limit=10'
    // );
    // const data = await resp.json();
    // this._gifsList = data.data.map((gifResult: any) => {
    //   return { url: gifResult.url, placeholder: gifResult.title };
    // });
    // .then((resp) => resp.json())
    // .then((data) => {
    //   console.log(data);
    //   this._gifsList = data.data.map((gifResult: any) => {
    //     return { url: gifResult.url, placeholder: gifResult.title };
    //   });
    // });
  }
}
