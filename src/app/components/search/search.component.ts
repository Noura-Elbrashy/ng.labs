import { Component , EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
email = '';
@Output() searchEvent = new EventEmitter<string>();
  @Output() resetEvent = new EventEmitter<void>();

  searchNow() {
    this.searchEvent.emit(this.email);
  }

  resetNow() {
    this.email = '';
    this.resetEvent.emit();
  }
}
