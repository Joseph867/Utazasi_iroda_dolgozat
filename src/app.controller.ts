import { Body, Controller, Delete, Get, Patch, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Travels } from './travels';
import { CreateTravelDto, UpdateTravelDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private travels = new Travels();

  @Get('/travels')
  getAll() {
    return this.travels.getAll();
  }

  @Get('/travels/:id')
  getById(id: string) {
    return this.travels.getById(parseInt(id, 10));
  }

  @Post('/travels')
  create(@Body() data: CreateTravelDto) {
    return this.travels.add({...data, discount: 0});
  }

  @Patch('/travels/:id')
  update(id: string, @Body() data: UpdateTravelDto) {
    return this.travels.replace(parseInt(id, 10), {
      destination: data.destination,
      description: data.description,
      imgUrl: data.imgUrl, 
      price: data.price,
      discount: data.discount,
    });
  }

  @Delete('/travels/:id')
    delete(id: string) {
    return this.travels.remove(parseInt(id, 10));
  }
  

  


  


}
