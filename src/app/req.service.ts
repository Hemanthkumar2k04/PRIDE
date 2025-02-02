import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqService {
  private backendUrl = 'http://localhost:5000/generate'; // Your backend API

  constructor(private http: HttpClient) {}

  // Function to send selected topics as a request
  sendTopics(selectedTopics: string[]): Observable<any> {
    const prompt = `Generate a project idea for: ${selectedTopics.join(', ')}`;
    return this.http.post<any>(this.backendUrl, { prompt : prompt, is_custom_prompt:false});
  }
  sendCustomPrompt(customPrompt: string): Observable<any> {
    return this.http.post<any>(this.backendUrl, { prompt: customPrompt , is_custom_prompt:true});
  }
}
