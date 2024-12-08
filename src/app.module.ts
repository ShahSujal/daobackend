import { Module } from '@nestjs/common';
import { MoralisModule } from './moralis/moralis.module';
import { StreamController } from './stream/stream.controller';
import { WebhookModule } from './webhook/webhook.module';
import { OrganizationService } from './organization/organization.service';
import { OrganizationController } from './organization/organization.controller';

@Module({
  imports: [MoralisModule, WebhookModule],
  controllers: [StreamController, OrganizationController],
  providers: [OrganizationService],
})
export class AppModule {}
