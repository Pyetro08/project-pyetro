import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers = [
    { id: 1, name: 'João', email: 'joao@email.com' },
  ];

  findAll() {
    return this.customers;
  }

  findById(id: number) {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    return customer;
  }

  create(data: { name: string; email: string }) {
    if (!data.name || data.name.length < 3) {
      throw new BadRequestException('Nome deve ter pelo menos 3 caracteres');
    }
    if (!data.email.includes('@')) {
      throw new BadRequestException('Email inválido');
    }

    const newCustomer = { id: Date.now(), ...data };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, data: any) {
    const index = this.customers.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    this.customers[index] = { ...this.customers[index], ...data };
    return this.customers[index];
  }

  delete(id: number) {
    const index = this.customers.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    const deleted = this.customers.splice(index, 1);
    return deleted[0];
  }
}
