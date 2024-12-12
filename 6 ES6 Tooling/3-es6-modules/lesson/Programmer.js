import { setSkills, getSkills } from './ProgrammerSkills.js';

class Programmer {
    constructor(name, skills) {
        this.name = name;
        setSkills(this, skills);
    }

    code() {
        console.log(`${this.name} is coding in ${getSkills(this)}`);
    }
}

export default Programmer;