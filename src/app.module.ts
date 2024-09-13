import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '6244',
      database: 'courses',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Esto registra todas las entidades
      synchronize: true,
    }),
    CoursesModule,
  ],
})
export class AppModule {}
