import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule]
})
export class HomeComponent {
  topics = [
    'Artificial Intelligence',
    'Blockchain',
    'Data Science',
    'Cloud Computing',
    'Cybersecurity',
    'Internet of Things',
    'Augmented Reality',
    'Virtual Reality',
    'Machine Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Quantum Computing',
    'Robotics',
    'Edge Computing',
    '5G Technology'
  ];
  
  // Array to hold selected topics
  selectedTopics: string[] = [];

  // Dummy data for project idea and research papers (simulating API response)
  projectIdea: string | null = null;
  researchPapers: { title: string, link: string }[] = [];

  // Toggle selection of a topic
  toggleSelection(topic: string): void {
    // If the topic is already selected, remove it from the list
    if (this.selectedTopics.includes(topic)) {
      this.removeTopic(topic);
    } else {
      // Otherwise, add the topic to the selected list
      this.selectedTopics.push(topic);
    }
  }

  // Remove a selected topic from the selection bar
  removeTopic(topic: string): void {
    this.selectedTopics = this.selectedTopics.filter(t => t !== topic);
  }

  // Simulate project idea generation based on selected topics
  generateIdea(): void {
    if (this.selectedTopics.length === 0) {
      alert('Please select at least one topic!');
      return;
    }

    // Simulate API response with a generated project idea and related research papers
    this.projectIdea = `Project Idea for ${this.selectedTopics.join(', ')}: A cutting-edge solution in the chosen topics.`;
    this.researchPapers = [
      { title: 'Research Paper 1', link: 'https://link-to-research-paper.com/1' },
      { title: 'Research Paper 2', link: 'https://link-to-research-paper.com/2' },
      { title: 'Research Paper 3', link: 'https://link-to-research-paper.com/3' }
    ];
  }

  // Simulate opening a custom prompt input
  openCustomPrompt(): void {
    const customPrompt = prompt('Please enter your custom project prompt:');
    if (customPrompt) {
      this.projectIdea = `Custom Project Idea: ${customPrompt}`;
      this.researchPapers = []; // Clear research papers for custom prompt
    }
  }
}
