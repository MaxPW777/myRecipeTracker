import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL, { connectionName: 'Recipe-Tracker' })
  ,UsersModule], // Importez le module de base de données ici
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
