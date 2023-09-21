import { Module } from '@nestjs/common';
import { Features1Module } from './feature1.module';
import { Features2Module } from './feature2.module';

@Module({
  imports: [Features1Module,Features2Module],
  controllers: [],
  providers: [],
  exports:[]
})
export class OrdersModule {
    constructor(){
        console.log("OrdersModule")
    }
}
