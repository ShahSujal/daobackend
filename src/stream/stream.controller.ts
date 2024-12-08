import { Controller, Post, Body, Get } from '@nestjs/common';
import { MoralisService } from '../moralis/moralis.service';
import Moralis from 'moralis';

@Controller('stream')
export class StreamController {
  constructor(private readonly moralisService: MoralisService) {}
  @Get('addEventProposalCreation')
  async addContractEvent() {
    const PROPOSAL_CREATION_ABI = [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'proposalId',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'proposer',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
          },
          {
            indexed: false,
            internalType: 'uint256[]',
            name: 'values',
            type: 'uint256[]',
          },
          {
            indexed: false,
            internalType: 'string[]',
            name: 'signatures',
            type: 'string[]',
          },
          {
            indexed: false,
            internalType: 'bytes[]',
            name: 'calldatas',
            type: 'bytes[]',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'startBlock',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'endBlock',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'description',
            type: 'string',
          },
        ],
        name: 'ProposalCreated',
        type: 'event',
      },
    ]; // valid abi of the event

    // Moralis.Streams.addAddress({
    //   address:"0x0d4a11d5eeaac28ec3f61d100da6f99f7b1f9759",
    //   networkType:"evm",
    //   id:""
    // })
    const options = {
      chains: ['0xaa36a7'], // list of blockchains to monitor
      description: 'proposal event emitted', // your description
      tag: 'proposal_event', // give it a tag
      abi: PROPOSAL_CREATION_ABI,
      includeContractLogs: true,
      allAddresses: false,
      topic0: [
        'ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)',
      ], // topic of the event
      webhookUrl: 'https://5e48-14-195-142-82.ngrok-free.app/webhook/proposalevent', // webhook url to receive events,
    };

    const stream = await Moralis.Streams.add(options);
  }

  @Get('addEventRegistration')
  async addRegistration() {
    const REGISTRATION_ABI = [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint32',
            name: 'daoId',
            type: 'uint32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'contractAddress',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'daoName',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'logo',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'projectDescription',
            type: 'string',
          },
        ],
        name: 'DaoRegistered',
        type: 'event',
      }
    ]; // valid abi of the event

    const options = {
      chains: ['0xaa36a7'], // list of blockchains to monitor
      description: 'Setting up registration event', // your description
      tag: 'registration_event', // give it a tag
      abi: REGISTRATION_ABI,
      includeContractLogs: true,
      allAddresses: false,
      topic0: ['DaoRegistered(uint32,address,string,string,string)'], // topic of the event
      webhookUrl: 'https://5e48-14-195-142-82.ngrok-free.app/webhook/registrationevent', // webhook url to receive events,
    };

    const stream = await Moralis.Streams.add(options);
  }
  @Get('getStreams')
  async getStreams() {
    const streams = await Moralis.Streams.getAll({
      limit: 10,
    });
    return streams;
  }
}
