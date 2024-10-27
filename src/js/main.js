import Character from './Character.js';
import Team from './TeamIterator.js';
// import Team from './TeamGenerator.js'; // вариант с TeamGenerator

// Создаем нескольких персонажей
const archer = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const warrior = new Character('Воин', 'Warrior', 60, 2, 30, 20);

// Создаем команду
const team = new Team();
team.add(archer);
team.add(warrior);

// Перебираем персонажей
for (let character of team) {
  console.log(`Имя: ${character.name}, Здоровье: ${character.health}`);
}