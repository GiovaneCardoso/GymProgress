import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageInterface } from 'src/interfaces/image';

@Controller('images')
export class ImageController {
  constructor(private readonly ImageService: ImageService) {}

  @Post('')
  async postImage(@Body() { ...args }: ImageInterface): Promise<void> {
    this.ImageService.createImage({ ...args });
  }

  @Get('')
  async getImagesByEmail(@Query('email') email: string) {
    return await this.ImageService.getImagesByEmail(email);
  }
}
