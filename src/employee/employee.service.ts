import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  private employees = [
    { id: 1, name: 'Maria', role: 'Gerente' },
  ];

  findAll() {
    return this.employees;
  }

  findById(id: number) {
    const employee = this.employees.find(e => e.id === id);
    if (!employee) throw new NotFoundException(`Funcionário com ID ${id} não encontrado`);
    return employee;
  }

  create(data: { name: string; role: string }) {
    const newEmployee = { id: Date.now(), ...data };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  update(id: number, data: any) {
    const index = this.employees.findIndex(e => e.id === id);
    if (index === -1) throw new NotFoundException(`Funcionário com ID ${id} não encontrado`);
    this.employees[index] = { ...this.employees[index], ...data };
    return this.employees[index];
  }

  delete(id: number) {
    const index = this.employees.findIndex(e => e.id === id);
    if (index === -1) throw new NotFoundException(`Funcionário com ID ${id} não encontrado`);
    const deleted = this.employees.splice(index, 1);
    return deleted[0];
  }
}
