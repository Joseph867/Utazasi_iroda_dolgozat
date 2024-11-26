import { IsDecimal, IsEmpty, IsInt, IsNumber, IsString, IsUrl, Length, Max, min, Min, MinLength } from "class-validator";

export class CreateTravelDto {
    @IsString()
    @IsEmpty()
    destination: string;

    @IsString() 
    @Length(30)
    description: string;

    @IsUrl()
    imgUrl: string;

    @IsNumber()
    @IsInt()
    price: number;

}

export class UpdateTravelDto {
    @IsString()
    @IsEmpty()
    destination: string;

    @IsString() 
    @Length(30)
    description: string;

    @IsUrl()
    imgUrl: string;

    @IsNumber()
    @IsInt()
    price: number;

    @IsNumber()
    @Min(0)
    @Max(50)
    @IsDecimal()
    discount: number;

}