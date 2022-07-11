'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [
      {
        title: 'Busco a Mateo',
        description: 'Se me perdio Mateo en la calle uspallata 721, si lo ven por favor contactarme',
        location: 'Luján de Cuyo',
        image: 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
        phone_contact: '2616721833',
        views: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Se me perdio Fatiga',
        description: 'Se me perdio Fatiga en la calle moreno, si lo ven por favor contactarme',
        location: 'Godoy Cruz',
        image: 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
        phone_contact: '2616518891',
        views: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Ayudame a encontrar a Limon',
        description: 'Estoy buscando a Limon, se me perdio el jueves por la noche, si lo ven por favor contactarme',
        location: 'Maipú',
        image: 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
        phone_contact: '2616745588',
        views: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Estoy buscando a mi gato Coco',
        description: 'Se me perdio el dia de ayer, fue visto por la calle patagonia, si lo ven por favor contactarme',
        location: 'Junin',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkh_FYMYUfQ45wJ7ONA8n-ume58OfaZrXSA&usqp=CAU',
        phone_contact: '2615811712',
        views: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Me llamo Firulais',
        description: 'Busco a Firulais desde el 12 de Julio, si lo ven por favor contactarme',
        location: 'San Martin',
        image: 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
        phone_contact: '2615880441',
        views: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Buscamos a Lucio',
        description: 'Mi perro Lucio se perdio anoche en la esquina de la calle zarate, si lo ven por favor contactarme. Se ofrece recompensa',
        location: 'Las Heras',
        image: 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
        phone_contact: '2616871463',
        views: 104,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
