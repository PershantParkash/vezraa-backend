import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, isBoolean } from "class-validator";

export class toggleStatusDto{
    @ApiProperty({example: true})
    @IsBoolean()
    isActive: boolean;
}