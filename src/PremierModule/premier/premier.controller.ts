import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PremierService } from './premier.service';

@Controller('premier')
export class PremierController {
    constructor(private service:PremierService){}
    //Sorry,I can't help my self to not use a service and a return output
    @Get('')
    async getPremier(){
        let out = this.service.getPremier()
        console.log(out)
        return out
    }
    @Post('')
    async postPremier(){
        let out = this.service.postPremier()
        console.log(out)
        return out
    }
    @Put('')
    async putPremier(){
        let out = this.service.putPremier()
        console.log(out)
        return out
    }
    @Delete('')
    async deletePremier(){
        let out = this.service.deletePremier()
        console.log(out)
        return out
    }
}
