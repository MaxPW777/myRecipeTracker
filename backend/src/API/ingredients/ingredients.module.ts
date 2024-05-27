import { Module } from '@nestjs/common';
import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientsSchema } from './schemas/ingredients.schema';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@/src/auth/auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Ingredients', schema: IngredientsSchema },
    ]),
  ],
  controllers: [IngredientsController],
  providers: [
    IngredientsService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class IngredientsModule {}
