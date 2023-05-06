const arr = [
  { id: 1, title: 'javascript' },
  { id: 2, title: 'typescript' },
  { id: 3, title: 'mongodb' },
  { id: 4, title: 'mongoose' },
  { id: 5, title: 'pg' }
];

const fs = require(`fs`)

const path = `./storage/storage.json`


function getAllSkills() {
  return arr;
}

function getSkillById(id) {
  const filtered = arr.filter(elem => elem.id == id);
  return filtered;
}

function createSkill(title) {
  const filtered = arr.filter(elem => elem.title == id);
  return filtered;
}

module.exports = { getAllSkills, getSkillById };
