import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})
export class Features1Module {
    constructor(){
        console.log("Features1Module")
    }
}
