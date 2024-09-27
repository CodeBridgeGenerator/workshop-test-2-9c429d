
    module.exports = function (app) {
        const modelName = 'kelulusan';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            latihan: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
pelulusan: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
status: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
komen: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };