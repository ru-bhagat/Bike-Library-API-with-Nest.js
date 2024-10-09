import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeModule } from './bike.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bike-library.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Automatically sync database schema, disable in production
    }),
    BikeModule,
  ],
})
export class AppModule {}
