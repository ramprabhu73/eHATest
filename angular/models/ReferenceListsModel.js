var mongoose = require('mongoose');
var db = require('./db.js');

module.exports = {
    _schema: null,

    _schema_def: {
        _id: String
        , Name:String
    },

    schema: function(){
        if (!module.exports._schema){
            module.exports._schema = new mongoose.Schema(module.exports._schema_def, { collection: 'ReferenceLists' });
        }

        return module.exports._schema;
    },

    _model: null,

    model: function(new_instance){
        if (!module.exports._model){
            var schema = module.exports.schema();
            //   console.log('schema for users');
            //   console.log(schema);
            mongoose.model('ReferenceLists', schema);
            module.exports._model = mongoose.model('ReferenceLists');
        }

        return new_instance ?
            new module.exports._model() :
            module.exports._model;
    }
}

