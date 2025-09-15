import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAgencyDto{
    @ApiProperty({ example:'abc' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example:'abc' })
    @IsNotEmpty()
    @IsString()
    db_name: string;
    

    @ApiProperty({ example:'db_user_1' })
    @IsNotEmpty()
    @IsString()
    db_user: string;

    @ApiProperty({ example:'dbpassword' })
    @IsNotEmpty()
    @IsString()
    db_pass: string;

    @ApiProperty({ example: 'my-agency-bucket', required: false })
    @IsOptional()
    @IsString()
    s3_bucket?: string;
}