import { Module } from '@nestjs/common';
import { S3Service } from './s3/s3.service';
import { AwsS3Controller } from './s3/s3.controller';
import { ImageController } from './image/image.controller';
import { ImageService } from './image/image.service';

@Module({
  imports: [],
  controllers: [AwsS3Controller, ImageController],
  providers: [S3Service, ImageService],
})
export class AppModule {}
