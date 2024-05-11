import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: process.env.DATABASE_PASSWORD,
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        logging: true,
        sync:true
        
      }),
    }),
  ],
})
export class DatabaseModule {}
