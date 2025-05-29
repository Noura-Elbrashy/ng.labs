import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true, // Ensure standalone is true
  imports: [CommonModule, FormsModule] // Add CommonModule and FormsModule
})
export class ContactComponent implements OnInit {
  formData = {
    first_name: '',
    last_name: '',
    phone: '',
    subject: '',
    email: '',
    message: ''
  };
  showPopup = false;
  showScrollButton = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    AOS.init({
      duration: 3000,
      easing: 'ease-out-cubic'
    });
  }

  onSubmit(): void {
    const form = new FormData();
    Object.keys(this.formData).forEach(key => {
      form.append(key, this.formData[key]);
    });

    this.http
      .post('https://formspree.io/f/xldjwqny', form, {
        headers: { Accept: 'application/json' }
      })
      .subscribe({
        next: () => {
          this.showPopup = true;
        },
        error: () => {
          alert('❌ Check your internet connection.');
        }
      });
  }

  closePopup(): void {
    this.showPopup = false;
    this.formData = {
      first_name: '',
      last_name: '',
      phone: '',
      subject: '',
      email: '',
      message: ''
    };
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollButton = window.scrollY >= 400;
  }
}