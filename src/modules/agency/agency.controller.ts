// import { Controller, Body, Post, Get, Patch, Param, UseGuards  } from '@nestjs/common';
// import { Agency } from 'src/entities/agency.entity';
// import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
// import { AgencyService } from './agency.service';
// import { CreateAgencyDto } from './dto/create-agency.dto';
// import { UpdateAgencyDto } from './dto/update-agency.dto';
// import { toggleStatusDto } from './dto/toggle-status.dto';
// import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'

// @ApiBearerAuth('JWT-auth')
// @UseGuards(JwtAuthGuard)
// @Controller('agency')
// export class AgencyController {
//     constructor(private readonly agencyService: AgencyService){}

//     @Post()
//     @ApiOperation({ summary:'Register a new agency' })
//     @ApiResponse({ status: 201, description: 'Agency created successfully' })
//     @ApiResponse({ status: 401, description: 'Unauthorized' })
//     create(@Body() dto: CreateAgencyDto){
//         return this.agencyService.create(dto)
//     }
//      @Get()
//   findAll() {
//     return this.agencyService.findAll();
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() dto: UpdateAgencyDto) {
//     return this.agencyService.update(id, dto);
//   }

//   @Patch(':id/toggle-status')
//   toggleStatus(@Param('id') id: string, @Body() dto: toggleStatusDto) {
//     return this.agencyService.toggleStatus(id);
//   }

// }
import { Controller, Body, Post, Get, Patch, Param, UseGuards  } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Agency } from 'src/entities/agency.entity';
import { AgencyService } from './agency.service';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { toggleStatusDto } from './dto/toggle-status.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'

@ApiTags('Agency')
@ApiBearerAuth('JWT-auth') // This enables the lock icon for this controller
@UseGuards(JwtAuthGuard)
@Controller('agency')
export class AgencyController {
    constructor(private readonly agencyService: AgencyService){}

    @Post()
    @ApiOperation({ summary:'Register a new agency' })
    @ApiResponse({ status: 201, description: 'Agency created successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    create(@Body() dto: CreateAgencyDto){
        return this.agencyService.create(dto)
    }

    @Get()
    @ApiOperation({ summary: 'Get all agencies' })
    @ApiResponse({ status: 200, description: 'List of agencies' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    findAll() {
        return this.agencyService.findAll();
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update an agency' })
    @ApiResponse({ status: 200, description: 'Agency updated successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @ApiResponse({ status: 404, description: 'Agency not found' })
    update(@Param('id') id: string, @Body() dto: UpdateAgencyDto) {
        return this.agencyService.update(id, dto);
    }

    @Patch(':id/toggle-status')
    @ApiOperation({ summary: 'Toggle agency status' })
    @ApiResponse({ status: 200, description: 'Status toggled successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @ApiResponse({ status: 404, description: 'Agency not found' })
    toggleStatus(@Param('id') id: string, @Body() dto: toggleStatusDto) {
        return this.agencyService.toggleStatus(id);
    }
}