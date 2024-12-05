import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  message: string = '';
  chat: any[] = [];

  constructor(private http: HttpClient) { }

  sendMessage() {
    this.http.post('http://localhost:5000/message', { message: this.message })
      .subscribe((response: any) => {
        this.chat.push({ text: this.message, sender: 'user' });
        this.chat.push(...response.map((msg: any) => ({ text: msg.text, sender: 'bot' })));
        this.message = '';
      });
  }
}
