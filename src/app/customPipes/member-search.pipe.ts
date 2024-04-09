import { Pipe, PipeTransform } from '@angular/core';
import { IMember } from '../adminmodule/members/members';


@Pipe({
  name: 'memberSearch'
})
export class MemberSearchPipe implements PipeTransform {

  transform(members: IMember[], memberSearch: string): IMember[] {
    if (memberSearch) {
      return members.filter(IMember => {
        return IMember.uname.toLowerCase().includes(memberSearch.toLowerCase())
      })
    }
    else {
      return members;
    }

  }

}
