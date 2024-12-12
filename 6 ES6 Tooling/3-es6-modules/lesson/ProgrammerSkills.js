const programmerSkills = new WeakMap();

export function setSkills(programmer, skills) {
    programmerSkills.set(programmer, skills);
}

export function getSkills(programmer) {
    return programmerSkills.get(programmer);
}
