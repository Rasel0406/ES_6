const studentObejct ={
    country:"Bangladesh",
    name:{
        name1: "Rafi",
        address:{
            city: "Dhaka",
            area: "Dhanmondi",
            family:{
                father: "Rafiq",
                mother: "Rafika",
                sister: "Rafina",
            }
        }
    }
}
console.log(studentObejct.name.address.family.sister)