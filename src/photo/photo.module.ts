import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { Photo } from './photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])], 
  controllers: [PhotoController],
  providers: [PhotoService],
  exports: [PhotoService]
})
export class PhotoModule {}
