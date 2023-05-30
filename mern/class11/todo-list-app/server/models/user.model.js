const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Debe ingresar un título para la tarea.'],
        minlength: [3, 'Una tarea debe tener al menos 3 caracteres']
    }, 
    email: {
        type: String,
        required: [true, 'Debe ingresar un título para la tarea.'],
        // maxlength: [9, 'Una tarea debe tener al menos 3 caracteres']
    },
    password: {
        type: String,
        required: [true, 'Debe ingresar un título para la tarea.'],
    },
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Contraseñas deben coincidir')
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
});

const User = model('User', UserSchema);

module.exports = User;
