import { Controller, Body, Post, Get, Patch, Param } from '@nestjs/common';
import { Agency } from 'src/entities/agency.entity';
import { AgencyService } from './agency.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { toggleStatusDto } from './dto/toggle-status.dto';



@Controller('agency')
export class AgencyController {
    constructor(private readonly agencyService: AgencyService){}

    @Post()
    @ApiOperation({ summary:'Register a new agency' })
    create(@Body() dto: CreateAgencyDto){
        return this.agencyService.create(dto)
    }
     @Get()
  findAll() {
    return this.agencyService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAgencyDto) {
    return this.agencyService.update(id, dto);
  }

  @Patch(':id/toggle-status')
  toggleStatus(@Param('id') id: string, @Body() dto: toggleStatusDto) {
    return this.agencyService.toggleStatus(id);
  }

}
