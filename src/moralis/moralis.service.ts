import { Injectable, OnModuleInit } from '@nestjs/common';
import Moralis from 'moralis';

@Injectable()
export class MoralisService implements OnModuleInit {
  async onModuleInit() {
    const apiKey = process.env.MORALIS_API_KEY;
    if (!apiKey) {
      throw new Error('MORALIS_API_KEY is not defined in environment variables');
    }

    // Initialize Moralis
    await Moralis.start({ apiKey });
    console.log('Moralis initialized successfully');
  }

  async createStream(name: string, options: any) {
    console.log("come to create stream");
    
    const stream = await Moralis.Streams.add(options);
    console.log(`Stream created with ID: ${stream}`);
    
    console.log(`Stream created with ID: ${stream.result.id}`);
    return stream;
  }

  async getStreams() {
    const streams = await Moralis.Streams.getAll({
        limit: 10,
    });
    return streams;
  }

  async deleteStream(id: string) {
    await Moralis.Streams.delete({ id });
    console.log(`Stream with ID ${id} deleted`);
  }
}
