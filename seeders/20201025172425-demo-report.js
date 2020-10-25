'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reports', [{
      line: 'Industrial - Ipase',
      description: 'Assalto a mao armada',
      latitude: -2.531089,
      longitude: -44.2384228,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reports', null, {});
  }
};
