import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Chargez les variables d'environnement
    MongooseModule.forRoot(process.env.DB_URL), // Utilisez la variable d'environnement pour la connexion
  ],
})
export class DatabaseModule {}
