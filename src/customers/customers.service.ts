import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers = [
    { id: 1, name: 'João Silva', email: 'joao@email.com' },
    { id: 2, name: 'Maria Oliveira', email: 'maria@email.com' },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  create(customer: any) {
    const newCustomer = { id: Date.now(), ...customer };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  remove(id: number) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
    return { deleted: true };
  }
}