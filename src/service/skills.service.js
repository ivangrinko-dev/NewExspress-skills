const fs = require(`fs`);

const path = `./storage/storage.json`;

function getAllSkills() {
  const data = JSON.parse(fs.readFileSync(path));
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
}

function getSkillById(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(elem => elem.id == id);
  fs.writeFileSync(path, JSON.stringify(filtered));

  return filtered;
}

function createSkill(title) {
  const data = JSON.parse(fs.readFileSync(path));
  data.push({
    id: data.length + 1,
    title: title,
  });
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
}

function upSkillData(id, title) {
  const array = JSON.parse(fs.readFileSync(path));
  const index = array.findIndex(elem => elem.id == id);
  if (index == -1) throw new Error('There is no such id');
  array[index].title = title;
  fs.writeFileSync(path, JSON.stringify(array));
  return array;
}

function deleteSkill(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(elem => elem.id != id);
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

module.exports = { getAllSkills, getSkillById, createSkill, upSkillData, deleteSkill };
