import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Users {
  name: string;
  location: string;
  birthday: string;
  birthLocation: string;
 
}

const ELEMENT_DATA: Users[] = [
  {name: 'Andres Caicedo' , location: 'Medellín', birthday: '12/03/1998', birthLocation: 'Cali'},
  {name: 'Carlos Aroca' , location: 'Cali', birthday: '30/04/2000', birthLocation: 'Santa Marta'},
  {name: 'Sofia Posso' , location: 'Ibagué', birthday: '11/05/2003', birthLocation: 'Saldaña'},
  {name: 'Samuel Quiroga' , location: 'Manizales', birthday: '28/12/2002', birthLocation: 'Bogotá'},
  {name: 'Juan Gomez' , location: 'Cartagena', birthday: '28/02/1995', birthLocation: 'Barranquilla'},
];

/**
 * @title Table with filtering
 */
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'location', 'birthday', 'birthLocation'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title="prueba"
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
