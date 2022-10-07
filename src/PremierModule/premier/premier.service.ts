import { Injectable } from '@nestjs/common';

@Injectable()
export class PremierService {
    constructor(){}
    async getPremier():Promise<string>{
        return "We have a GET here!"
    }
    async postPremier():Promise<string>{
        return "And my dear people we have a POST here!"
    }
    async putPremier():Promise<string>{
        return "Oh my god and we have a PUT!"
    }
    async deletePremier():Promise<string>{
        return "I can't believe it ! Even a DELETE"
    }
}
