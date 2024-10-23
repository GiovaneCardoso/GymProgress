// src/aws-s3.service.ts
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class S3Service {
  private s3: S3;
  private readonly bucketName = 'gymprogress';

  constructor() {
    this.s3 = new S3({
      region: 'sa-east-1',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  async generatePresignedUrl(
    fileName: string,
    fileType: string,
  ): Promise<string> {
    console.log(fileName, fileType);
    const key = `${fileName}`;

    const params = {
      Bucket: this.bucketName,
      Key: key,
      Expires: 260,
      ContentType: fileType,
    };

    return this.s3.getSignedUrlPromise('putObject', params);
  }
}
