import { Controller, Get, Param } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Controller('organization')
export class OrganizationController {
    private client: PrismaClient = new PrismaClient();
    @Get('getAllOrganization')
    async getAllOrganizationEvent() {
    return this.client.organization.findMany()
    }

   
  @Get('getOrganizationById/:id')
  async getOrganizationByIdEvent(@Param('id') id: string) {
    const orgData = await this.client.organization.findFirst({
      where: {
        id: Number(id),
      },
    });
    const proposalData = await this.client.proposal.findMany({
      where: {
        organizationId: Number(id),
      },
    })

    return {
      organizationData:orgData,
      proposalData
    };
  }

//   get proposal by organization id
@Get('getProposalsByOrganizationId/:organizationId')
async getProposalsByOrganizationId(@Param('organizationId') organizationId: string) {
  return this.client.proposal.findMany({
    where: {
      organizationId: parseInt(organizationId),
    },
  });
}
}
