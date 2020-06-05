import { Component } from '@angular/core'
import { templateJitUrl } from '@angular/compiler';

@Component ({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        
        <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
        <h3>{{thumbnail.someProperty}}</h3>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
    </div>
    `
    
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2020',
        time: '10:00 am',
        price: 599.00,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DI',
            city: 'Nairobi',
            country: 'Kenya'

        }
    }

    handleEventClicked(data) {
        console.log("received:", data)
    }
}