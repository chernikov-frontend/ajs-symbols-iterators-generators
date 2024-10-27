import Character from './Character.js';

class Team {
  constructor() {
    this.members = [];
  }

  add(member) {
    if (!(member instanceof Character)) {
      throw new Error('Только объекты класса Character могут быть добавлены.');
    }
    this.members.push(member);
  }

  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

export default Team;