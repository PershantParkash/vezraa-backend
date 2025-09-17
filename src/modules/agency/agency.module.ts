import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';
import { Agency } from '../../entities/agency.entity'
import { JwtStrategy } from '../../common/guards/jwt.strategy'

@Module({
  imports: [TypeOrmModule.forFeature([Agency])],
  providers: [AgencyService, JwtStrategy],
  controllers: [AgencyController]
})
export class AgencyModule {}
