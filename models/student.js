/**  
*   placeForMe - 
*   Copyright (C) 2015 by Magna SIS <magnasis@magnasis.com>
*
*   This program is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   This program is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// models/student.js

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Student', {
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "-> Falta Nombre"
                }
            }
        },
        surname: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "-> Falta Apellido"
                }
            }
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: {
                    args: 2,
                    msg: "-> Curso minimo 2º",
                },
                max: {
                    args: 4,
                    msg: "-> Curso maximo 4º",
                },
                notEmpty: {
                    msg: "-> Falta Curso"
                },
            },
        },
        avgGrade: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0,
                max: 10,
            }
        },
        credits: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 240,
            }
        },
        specialisation: {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ['IS', 'IC', 'C'],
        }
    });
}