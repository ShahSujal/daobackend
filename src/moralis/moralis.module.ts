import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoralisService } from './moralis.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [MoralisService],
  exports: [MoralisService],
})
export class MoralisModule {}
