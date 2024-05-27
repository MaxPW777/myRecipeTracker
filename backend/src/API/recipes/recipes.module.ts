import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesSchema } from './schemas/recipes.schema';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@/src/auth/auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Recipes', schema: RecipesSchema }]),
  ],
  controllers: [RecipesController],
  providers: [
    RecipesService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class RecipesModule {}
