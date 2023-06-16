import { Component } from '@angular/core';
import { CalendarOptions, EventSourceInput } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-calender';
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    height : 600,
    events: [
      { title: 'Today ', date: '2023-06-16' },
      { title: 'Shiv Jayanti', date: '2023-06-02' }
    ],
    weekends: true,
    // dateClick: this.handleDateClick.bind(this)
    eventClick : this.handleDateClick.bind(this)
  };
  eventsPromise!: Promise<EventSourceInput>;
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

}
