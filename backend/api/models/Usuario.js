/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type: 'String',
      required:true
    },
    apellido:{
      type: 'String',
      required:true
    },
    pulsaciones:{
      collection:'Pulsacion',
      via:'usuarioIdFK'
    }

  },

};

