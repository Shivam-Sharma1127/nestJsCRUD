import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})
export class Features2Module {
    constructor(){
        console.log("Features2Module")
    }
}
