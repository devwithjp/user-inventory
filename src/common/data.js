export const userData = (id,age) =>{return {
    id: id,
    name: 'John Doe',
    age: age,
    dob: '01/01/1990',
    gender: 'Male',
    food: 'Pizza',
    hobbies: 'Likes to play football',
}}



export const users = [
    userData(0,20),
    userData(1,30),
    userData(2,40),
    userData(3,50),
    userData(4,60),
    userData(5,70),
];