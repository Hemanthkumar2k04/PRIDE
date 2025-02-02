import { Component } from '@angular/core';
import { ReqService } from '../req.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [] 
})
export class HomeComponent {
  topics = [
    'Artificial Intelligence', 'Blockchain', 'Data Science', 'Cloud Computing',
    'Cybersecurity', 'Internet of Things', 'Augmented Reality', 'Virtual Reality',
    'Machine Learning', 'Natural Language Processing', 'Computer Vision',
    'Quantum Computing', 'Robotics', 'Edge Computing', '5G Technology'
  ];

  selectedTopics: string[] = [];
  customPrompt: string | null = null; // 🔹 Stores user-entered custom prompt
  projectIdea: string | null = null;

  constructor(private reqService: ReqService) {} 

  toggleSelection(topic: string): void {
    if (this.selectedTopics.includes(topic)) {
      this.removeTopic(topic);
    } else {
      this.selectedTopics.push(topic);
    }
  }

  removeTopic(topic: string): void {
    this.selectedTopics = this.selectedTopics.filter(t => t !== topic);
  }

  // Function to send either selected topics or custom prompt
  generateIdea(): void {
    if (this.customPrompt) {
      // 🔹 If there's a custom prompt, send it to the backend
      this.reqService.sendCustomPrompt(this.customPrompt).subscribe(
        (data) => {
          this.projectIdea = data.result;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else if (this.selectedTopics.length > 0) {
      // 🔹 If there are selected topics, send them instead
      this.reqService.sendTopics(this.selectedTopics).subscribe(
        (data) => {
          this.projectIdea = data.result;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      alert('Please select topics or enter a custom prompt!');
    }
  }

  // Open a prompt for the user to enter a custom idea
  openCustomPrompt(): void {
    const userPrompt = prompt('Please enter your custom project prompt:');
    if (userPrompt) {
      this.customPrompt = userPrompt;
      this.projectIdea = null; // Reset project idea when changing prompt
      this.selectedTopics = []; // Clear selected topics when using custom prompt
    }
  }
}
