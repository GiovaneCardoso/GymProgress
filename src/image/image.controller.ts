import { Controller, Get, Post } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageInterface } from 'src/interfaces/image';

@Controller('images')
export class ImageController {
  constructor(private readonly ImageService: ImageService) {}

  @Post('')
  async postImage({ ...args }: ImageInterface): Promise<void> {
    this.ImageService.createImage({ ...args });
  }

  @Get('')
  async getImagesByEmail(email: string) {
    return await this.ImageService.getImagesByEmail(email);
  }
}
