const arr = [
  { id: 1, title: 'javascript' },
  { id: 2, title: 'typescript' },
  { id: 3, title: 'mongodb' },
  { id: 4, title: 'mongoose' },
  { id: 5, title: 'pg' },
];

const fs = require(`fs`);

const path = `./storage/storage.json`;

function getAllSkills() {
  return arr;
}

function getSkillById(id) {
  const filtered = arr.filter(elem => elem.id == id);
  return filtered;
}

function createSkill(title) {
  const data = JSON.parse(fs.readFileSync(path));
  data.push({
    id: data.length + 1,
    title: title
  });
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
}

function putSkillById(id, title) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter((elem) => elem.id == id);
  if (filtered.length != data.length) {
    filtered.push({
      id,
      title,
     
    });
  
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

module.exports = { getAllSkills, getSkillById, createSkill, putSkillById };
