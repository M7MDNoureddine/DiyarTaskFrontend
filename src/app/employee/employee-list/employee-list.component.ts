import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  empList: Employee[] = [];
  constructor(private empServ: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.empServ.getEmployees().subscribe((data: Employee[]) => {console.log(data); this.empList = data})
}
edit(id : number) {
  this.router.navigate(['/Edit', id]);
}

Add()
{
  this.router.navigate(['/Add']);
}

}
