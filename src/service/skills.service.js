const arr = [
  { id: 1, title: 'javascript' },
  { id: 2, title: 'typescript' },
  { id: 3, title: 'mongodb' },
  { id: 4, title: 'mongoose' },
  { id: 5, title: 'pg' },
];

function getAllSkills() {
  return arr;
}

function getSkillById(id) {
  const filtered = arr.filter(elem => elem.id == id);
  return filtered;
}

module.exports = { getAllSkills, getSkillById };
