import { Controller, Post, Body } from '@nestjs/common';
import { S3Service } from './s3.service';

@Controller('s3')
export class AwsS3Controller {
  constructor(private readonly awsS3Service: S3Service) {}

  @Post('generate-presigned-url')
  async generatePresignedUrl(
    @Body('fileName') fileName: string,
    @Body('fileType') fileType: string,
  ): Promise<{ url: string }> {
    const url = await this.awsS3Service.generatePresignedUrl(fileName, fileType);
    return { url };
  }
}
