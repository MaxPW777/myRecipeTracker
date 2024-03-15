import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module'; // Importez votre module de base de données
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule], // Importez le module de base de données ici
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
