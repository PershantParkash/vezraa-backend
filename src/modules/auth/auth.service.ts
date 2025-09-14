import { ConflictException, Injectable,UnauthorizedException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService, @InjectRepository(User) private userRepo: Repository<User>,
    ){}

    async register( email: string, password: string){
        const existingUser = await this.userRepo.findOne({where: { email }});
         if(existingUser) throw new UnauthorizedException('email already taken');

         const hashedPassword = await bcrypt.hash(password, 10);
         const user =  this.userRepo.create({email, password: hashedPassword })
         await this.userRepo.save(user);
         const payload = { id: user.id };
         return { status: "success", message: 'User registered successfully', access_token: this.jwtService.sign(payload) }
    }

    async login( email: string, password: string){
        const userExist = await this.userRepo.findOne({where: { email }});
         if(!userExist) throw new ConflictException('Invalid creds');

         const isMatch = await bcrypt.compare(password, userExist.password )

         if (!isMatch) throw new UnauthorizedException('Invalid credentials');
          const payload = { id: userExist.id };
         
          return { status: "success", message: 'User login successfully', access_token: this.jwtService.sign(payload) };
         }
}
