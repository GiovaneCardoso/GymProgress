import { Injectable } from '@nestjs/common';
import { ImageInterface } from 'src/interfaces/image';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}

  async getImagesByEmail(email: string) {
    return this.prisma.image.findMany({
      where: {
        email,
      },
    });
  }

  async createImage({ email, type, image_url }: ImageInterface) {
    return this.prisma.image.create({
      data: {
        email,
        image_url,
        type,
      },
    });
  }
}
