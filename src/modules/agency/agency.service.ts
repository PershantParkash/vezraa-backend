import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Agency } from 'src/entities/agency.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AgencyService {
    constructor(@InjectRepository(Agency) private agencyRepo: Repository<Agency>){}

    private generateCode(): string{
        return uuidv4().split('-')[0]
    }

    async create(data: Partial<Agency>){
        const agency = this.agencyRepo.create({...data, code: this.generateCode()})
        await this.agencyRepo.save(agency)
        return { status: "success", message: 'Agency created successfully',}
    }

    async findAll(){
        return { status: "success", data: await this.agencyRepo.find()}
        
    }

    async findById( id:string) {
        const agency = await this.agencyRepo.findOne({where: {id}})
        if(!agency) throw new NotFoundException('Agency not found');

        return { status: "success", data: agency}
    }

    async update(id: string, data: Partial<Agency>) {
    const agency = await this.agencyRepo.preload({ id, ...data });
    if (!agency) throw new NotFoundException('Agency not found');
     return this.agencyRepo.save(agency);
}

  async toggleStatus(id: string) {
  const result = await this.findById(id); 
  const agency = result.data;

  agency.isActive = !agency.isActive;
  await this.agencyRepo.save(agency);

  return {
    id: agency.id,
    isActive: agency.isActive,
  };
}

}
