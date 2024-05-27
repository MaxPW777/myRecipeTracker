import { Module } from '@nestjs/common';
import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientsSchema } from './schemas/ingredients.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Ingredients', schema: IngredientsSchema },
    ]),
  ],
  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {}
