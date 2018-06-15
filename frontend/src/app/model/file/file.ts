import {DisplayUser} from "../user/display-user";

export class File {
  constructor(public name: String,
              public extension: String,
              public displayName: String,
              public size: String,
              public owner: DisplayUser,
              public downloadLink: String,
              public iconLink: String) {
  }
}
