import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly service: EmployeeService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Lista todos os funcionários' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Retorna um funcionário por ID' })
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Cria um novo funcionário' })
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Atualiza um funcionário' })
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Deleta um funcionário' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
