import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BikeService } from './bike.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('bikes')
@Controller('bikes')
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  @Get()
  findAll() {
    return this.bikeService.findAll();
  }

  @Post()
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikeService.create(createBikeDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createBikeDto: CreateBikeDto) {
    return this.bikeService.update(id, createBikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikeService.remove(id);
  }
}
