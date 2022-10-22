import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class SkillsPipe implements PipeTransform {
  transform(value: {skills:string[]}, metadata: ArgumentMetadata) {
    if(!value.skills){
      console.log(value.skills)
      throw new BadRequestException('Not string my boy!')
    }
    if(metadata.type==='body'){
      return value.skills.map(el=>el.toUpperCase()).join('-')
    }
  }
}
