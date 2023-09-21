import { Module } from '@nestjs/common';
import { Features3Module } from './feature3.module';

@Module({
  imports: [Features3Module],
  controllers: [],
  providers: [],
  exports:[]
})
export class ChatModule {
    constructor(){
        console.log("ChatModule")
    }
}
