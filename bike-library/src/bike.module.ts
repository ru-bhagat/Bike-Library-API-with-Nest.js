import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeService } from './bike/bike.service';
import { BikeController } from './bike/bike.controller';
import { Bike } from './bike/entities/bike.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  controllers: [BikeController],
  providers: [BikeService],
})
export class BikeModule {}
