import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './api/users/users.module';
import { RecipesModule } from './API/recipes/recipes.module';
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL)
  ,UsersModule,RecipesModule], // Importez le module de base de données ici
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
